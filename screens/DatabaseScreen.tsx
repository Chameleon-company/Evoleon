//Import necessary libraries and components
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Image, Switch } from "react-native";
import { LocationContext } from "../context/locations.context";
import { fetchLocations } from "../web/firebase";
import MarkerItem from "../context/markerItem";

import { Text, View } from "../components/Themed";
import { StyleSheet, Dimensions } from "react-native";
import MenuIcon from "../components/MenuIcon";
import { Marker, Callout, CalloutSubview } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { useEffect, useState, useContext } from "react";
import * as Location from "expo-location";
import main from "../styles/main";
import { render } from "react-dom";
import { SearchBar } from "react-native-screens";
import { State } from "react-native-gesture-handler";

import { MapStyle } from "../styles/mapStyle";
import {
  addorRemoveEvChargerLocationToUserFavouritesInDatabase,
  currentFavouriteIconInPopup,
  getChargerLocationAmenityAvailable,
  getCorrectIconIfLocationInFavourites,
} from "../view/mapFunctions";
import {
  getuserIsAuthenticated,
  getUsersFavouriteListInFirestore,
} from "../web/firebase";

let userAuthStateChange = getuserIsAuthenticated();

export default function DatabaseScreen() {
  
  // Using the navigation hook from react-navigation
  const navigation = useNavigation();
  
  // Getting the location context
  const { locationFromDB } = useContext(LocationContext);
  
  // Setting the initial map region using useState hook
  const [mapRegion, setmapRegion] = useState({
    latitude: -37.840935,
    longitude: 144.946457,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Setting required variables
  let initialPos = [{}];
  let tempLat, tempLong, dining, restroom, park, title;

  // Setting some more state variables using useState hook
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [coords, setcoords] = useState(initialPos);
  const [favMarkers, setFavouriteMarkers] = useState([{}]);

  // Function to refresh map markers if required
  const refreshMapMarkersifRequired = async () => {
    let signedIn = getuserIsAuthenticated();
    if (signedIn == true && userAuthStateChange != signedIn) {
      setFavouriteMarkers(await getUsersFavouriteListInFirestore());
      userAuthStateChange = signedIn;
      setFavouriteSelectedSwitch(false);
    }
    if (signedIn == false && userAuthStateChange != signedIn) {
      setFavouriteMarkers(await getUsersFavouriteListInFirestore());
      userAuthStateChange = signedIn;
      setFavouriteSelectedSwitch(false);
      setMarkers(coords);
    }
  };

  // React hook that runs when the component mounts and every time it updates
  useEffect(() => {
    // Adding a listener to the navigation object that will refresh the map markers if required when screen is in focus
    navigation.addListener("focus", () => {
      refreshMapMarkersifRequired();
    });

    // Setting options for navigation header
    (async () => {
      navigation.setOptions({
        headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
      });

      // Requesting permission to access the user's current location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // If permission is denied, sets an error message and returns
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Getting the user's current location and setting the map region to that location
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 5,
      });

      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // Fetching the locations to be displayed on the map
      const locally = await fetchLocations();
      console.log("NEW RUN ------------------------------------");
      console.log(locally);

      // Looping through fetched locations and creating new marker positions for each one
      for (let i = 1; i < Object.values(locally).length + 1; i++) {
        tempLat = locally[i][0];
        tempLong = locally[i][1];
        dining = locally[i][2];
        restroom = locally[i][3];
        park = locally[i][4];
        title = locally[i][5];

        let newPos = {
          lat: tempLat,
          long: tempLong,
          Dining: dining,
          Restroom: restroom,
          Park: park,
          Title: title,
        };

        // Setting the new marker positions
        setcoords((coords) => [...coords, newPos]);
      }
    })();
  }, []);

  // Defining a custom marker component
  const CustomMarker = (props) => {
    const { locationIcon } = props;
    return (
      <View>
        <Image source={locationIcon} style={MapStyle.mapIcons} />
      </View>
    );
  };

  //If switch is enabled, show only the users favourited EV charger locations on the map
  const [favouriteSelected, setFavouriteSelectedSwitch] = useState(false);
  // Defining a state variable to hold the displayed markers on the map
  let [displayedMarkers, setMarkers] = useState(coords);

  // Defining function to update the displayed markers on the map
  const updateMarkers = (
    m:
      | any[]
      | ((
          prevState: {
            id: number;
            lat: number;
            long: number;
            Dining: boolean;
            Park: boolean;
            Restroom: boolean;
          }[]
        ) => {
          id: number;
          lat: number;
          long: number;
          Dining: boolean;
          Park: boolean;
          Restroom: boolean;
        }[])
  ) => {
    setMarkers(m);
  };

  // Function for toggling between showing all markers or only favourited markers
  const toggleSwitch = () => {
    // Updating the state of favouriteSelectedSwitch to be the opposite of its previous value
    setFavouriteSelectedSwitch((previousState) => !previousState);

    // Checking if the toggle switch is turned off and the user is authenticated
    if (favouriteSelected == false && getuserIsAuthenticated() == true) {
      // Showing only the favourited markers and logging a message to the console
      console.log("Show only favourited markers");
      updateMarkers(favMarkers);
    } else if (favouriteSelected == true) {
      // If the toggle switch is turned on, showing all markers and logging a message to the console
      updateMarkers(coords);
      console.log("Show all markers");
    }
  };

  return (
    <View style={MapStyle.ViewStyle}>
      {/* A container for the toggle switch /}
      <View style={MapStyle.switchContainer}>
        <Text style={MapStyle.switchText}>Favourites</Text>
        {/ The toggle switch */}
        <Switch
          trackColor={{ false: "#767577", true: "#E9ECE6" }}
          thumbColor={favouriteSelected ? "#18A554" : "#f4f3f4"}
          ios_backgroundColor="#777E7D"
          onValueChange={toggleSwitch}
          value={favouriteSelected}
        />
      </View>

      
      {/* The map view with markers */}
      <MapView
        style={MapStyle.ViewStyle}
        showsUserLocation={true}
        initialRegion={{
          latitude: -37.840935,
          longitude: 144.946457,
          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
      >
        {coords.map((val, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: val.lat,
              longitude: val.long,
            }}
            title="Evoleon charging point"
            description="melbourne charging locations available"
          >
           {/* CustomMarker component with a specific icon depending on whether the location is favourited or not */}
            <CustomMarker
              locationIcon={getCorrectIconIfLocationInFavourites(val)}
            />

            <Callout tooltip={true}> // Callout component to show a popup when a marker is clicked
              <View style={MapStyle.MarkerPopupStyle}>
                <Text style={MapStyle.MarkerPopupStyleTextTitle}>
                  {" "}
                  {val.Title}{" "}
                </Text>
                <Text style={MapStyle.MarkerPopupStyleText}>
                  {" "}
                  {getChargerLocationAmenityAvailable(val)}
                </Text>
                <View style={MapStyle.IconPosition}>
                  <Image
                    source={require("../assets/Direction.png")}
                    style={MapStyle.IconStyle}
                  />
                  <Image
                    source={require("../assets/Start.png")}
                    style={MapStyle.IconStyle}
                  />
                  <Image
                    source={require("../assets/Info.png")}
                    style={MapStyle.IconStyle}
                  />
                  <CalloutSubview
                    onPress={async () => {
                      addorRemoveEvChargerLocationToUserFavouritesInDatabase(
                        val
                      );
                      setFavouriteMarkers(
                        await getUsersFavouriteListInFirestore()
                      );
                    }}
                  >
                    <Image
                      style={MapStyle.IconStyle}
                      source={currentFavouriteIconInPopup}
                    />
                  </CalloutSubview>
                </View>
              </View>
              // Closing Callout component for the popup
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
