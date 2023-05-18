import React, { useState, useEffect, useRef } from "react";
import { Text, View, Dimensions, Animated } from "react-native";
import { Marker, Callout, CalloutSubview } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { Button, Switch } from "react-native-paper";
import * as Location from "expo-location";
import { MapStyle } from "../styles/mapStyle";
import {
  getFavouriteMarkers,
  getuserIsAuthenticated,
  addFavouriteMarker,
  removeFavouriteMarker,
} from "../web/firebase";
import DatabaseDrawer from "./DatabaseDrawer";

const DatabaseMap = (props) => {
  // Refs and states
  const mapRef = useRef(null);
  const markerPressed = useRef(false);
  const userLocation = useRef(null);
  const markerPressTimeout = useRef(null);

  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [favouriteSelected, setFavouriteSelected] = useState(false);
  const [favouriteMarkers, setFavouriteMarkers] = useState([]);
  const [initialRegion, setInitialRegion] = useState({
    latitude: -37.840935,
    longitude: 144.946457,
    latitudeDelta: 0.922,
    longitudeDelta: 0.0421,
  });

  // Functions

  // Update region in parent component
  const onRegionChange = (newRegion) => {
    props.onRegionChange(newRegion);
  };

  // Get the user's location with necessary permissions
  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.warn("Permission to access location was denied");
      return false;
    }
    let loc = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });
    userLocation.current = loc;
    return true;
  };

  // Animate the map to a given location within a specified time
  const animateMap = (loc, time = 1000) => {
    if (!loc) {
      return;
    }
    mapRef.current.animateToRegion(
      {
        longitude: loc.longitude,
        latitude: loc.latitude,
        latitudeDelta: loc.latitudeDelta ? loc.latitudeDelta : 0.25,
        longitudeDelta: loc.longitudeDelta ? loc.longitudeDelta : 0.25,
      },
      time
    );
  };

  // // This is gross but needed. The onMapPress will always fire, even if you're pressing a marker.
  // // My fix is to set a timeout on the marker press, and if the timeout is still active when the map press fires, we don't do anything.
  // // This will need to be re-imagined in the future.
  // const togglePanelVisibility = (state) => {
  //   if (state !== undefined) {
  //     setIsVisible(state);
  //   } else {
  //     setIsVisible((prevIsVisible) => !prevIsVisible);
  //   }
  // };
  
  // Toggle bottom panel visibility
  const togglePanelVisibility = (state) => {
    setIsVisible(state !== undefined ? state : !isVisible);
  };

  // Handle marker press
  const onMarkerPress = (marker, index) => {
    clearTimeout(markerPressTimeout.current);
    setActiveMarkerIndex(index);
    markerPressed.current = true;
    props.onMarkerPress(marker);
    markerPressTimeout.current = setTimeout(() => {
      markerPressed.current = false;
    }, 200);
    togglePanelVisibility(true);
  };

  // // Code for hiding the bottom pannel if the user presses the map.
  // const onMapPress = (e) => {
  //   // clearTimeout(debounceTimeout.current);
  //   // const timeout = setTimeout(() => {
  //   //   console.log(markerPressed);
  //   //   if (!markerPressed.current) {
  //   //     togglePanelVisibility(false);
  //   //     setActiveMarkerIndex(null);
  //   //   }
  //   // }, 50);
  //   // debounceTimeout.current = timeout;
  // };

  // Favourite a marker
  const favouriteMarker = async (marker) => {
    if (favouriteMarkers.includes(marker.id)) {
      let res = await removeFavouriteMarker(marker.id);
      if (!res) {
        console.warn("Failed to remove marker from favourites: " + marker.id);
        return;
      }
      await setFavouriteMarkers(
        favouriteMarkers.filter((id) => id !== marker.id)
      );
    } else {
      let res = await addFavouriteMarker(marker.id);
      if (!res) {
        console.warn("Failed to add marker to favourites: " + marker.id);
        return;
      }
      await setFavouriteMarkers([...favouriteMarkers, marker.id]);
    }
  };

  // Handle favourite toggle
  const onFavouriteToggle = async () => {
    if (getuserIsAuthenticated()) {
      setFavouriteSelected(!favouriteSelected);
      let favMarkers = await getFavouriteMarkers();
      await setFavouriteMarkers(favMarkers);
    } else {
      setFavouriteSelected(false);
    }
  };

  // Animate map to user location on component load
  useEffect(() => {
    getUserLocation().then((res) => {
      if (res) {
        animateMap(userLocation.current.coords);
      }
    });
  }, []);

  // Render
  return (
    <>
      <View style={MapStyle.topContainer}>
        <Text style={MapStyle.switchText}>Favourites</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#E9ECE6" }}
          thumbColor={favouriteSelected ? "#18A554" : "#f4f3f4"}
          ios_backgroundColor="#777E7D"
          onValueChange={onFavouriteToggle}
          value={favouriteSelected}
        />
        <Button onPress={() => userLocation && animateMap(userLocation.current.coords)}>
          <Text>MyLocation</Text>
        </Button>
        <Button onPress={() => animateMap(initialRegion)}>
          <Text>TestingLocation</Text>
        </Button>
      </View>
      <MapView
        showsUserLocation={true}
        ref={mapRef}
        onPress={onMapPress}
        initialRegion={initialRegion}
        style={MapStyle.ViewStyle}
        onRegionChangeComplete={props.onRegionChange}
        zoomEnabled={true}
      >
        {props.markers.map((marker, index) => {
          if (
            (favouriteSelected && favouriteMarkers.includes(marker.id)) ||
            !favouriteSelected
          ) {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.name}
                onPress={() => onMarkerPress(marker, index)}
              >
                <Callout alphaHitTest={true}>
                  <Text>{marker.name}</Text>
                </Callout>
              </Marker>
            );
          }
        })}
      </MapView>
      {isVisible && (
        <DatabaseDrawer
          favourite={favouriteMarker}
          marker={props.marker}
        ></DatabaseDrawer>
      )}
    </>
  );
};

export default DatabaseMap;
