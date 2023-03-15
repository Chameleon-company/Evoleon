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
  const navigation = useNavigation();
  const { locationFromDB } = useContext(LocationContext);

  const [mapRegion, setmapRegion] = useState({
    latitude: -37.840935,
    longitude: 144.946457,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  let initialPos = [{}];
  let tempLat, tempLong, dining, restroom, park, title;

  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [coords, setcoords] = useState(initialPos);
  const [favMarkers, setFavouriteMarkers] = useState([{}]);

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

  useEffect(() => {
    navigation.addListener("focus", () => {
      refreshMapMarkersifRequired();
    });

    (async () => {
      navigation.setOptions({
        headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
      });

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

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

      const locally = await fetchLocations();
      console.log("NEW RUN ------------------------------------");
      console.log(locally);

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

        setcoords((coords) => [...coords, newPos]);
      }
    })();
  }, []);

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
  let [displayedMarkers, setMarkers] = useState(coords);

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

  const toggleSwitch = () => {
    setFavouriteSelectedSwitch((previousState) => !previousState);

    if (favouriteSelected == false && getuserIsAuthenticated() == true) {
      console.log("Show only favourited markers");
      updateMarkers(favMarkers);
    } else if (favouriteSelected == true) {
      updateMarkers(coords);
      console.log("Show all markers");
    }
  };

  return (
    <View style={MapStyle.ViewStyle}>
      <View style={MapStyle.switchContainer}>
        <Text style={MapStyle.switchText}>Favourites</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#E9ECE6" }}
          thumbColor={favouriteSelected ? "#18A554" : "#f4f3f4"}
          ios_backgroundColor="#777E7D"
          onValueChange={toggleSwitch}
          value={favouriteSelected}
        />
      </View>

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
        {coords.map((val) => (
          <Marker
            coordinate={{
              latitude: val.lat,
              longitude: val.long,
            }}
            title="Evoleon charging point"
            description="melbourne charging locations available"
          >
            <CustomMarker
              locationIcon={getCorrectIconIfLocationInFavourites(val)}
            />

            <Callout tooltip={true}>
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
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
