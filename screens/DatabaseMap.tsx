import React, { useState, useEffect, useRef } from "react";
import { Dimensions, Animated } from 'react-native';
import { Marker, Callout, CalloutSubview } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import { Button, Switch } from 'react-native-paper';
import * as Location from 'expo-location';

import { Text, View, useTheme } from '../components/Themed';
import { createMapStyle } from '../styles/mapStyle';

import {
  getFavouriteMarkers,
  getuserIsAuthenticated,
  addFavouriteMarker,
  removeFavouriteMarker,
} from '../web/firebase';

import DatabaseDrawer from './DatabaseDrawer';

const DatabaseMap = (props) => {
  const colorScheme = useTheme();

  const MapStyle = createMapStyle(colorScheme);

  //Ref for the map
  const mapRef = useRef(null);
  //Vars for the active marker
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);

  //Vars for workign out if the bototm card should be visible
  const [isVisible, setIsVisible] = useState(false);
  const markerPressed = useRef(false);
  const debounceTimeout = useRef(null);
  const markerPressTimeout = useRef(null);

  const [favouriteSelected, setFavouriteSelected] = useState(false);
  const [favouriteMarkers, setFavouriteMarkers] = useState([]);
  const userLocation = useRef(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: -37.840935,
    longitude: 144.946457,
    latitudeDelta: 0.922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = (newRegion) => {
    props.onRegionChange(newRegion);
  };

  // getUserLocation will attempt to get the users location and store it in the userLocation state.
  const getUserLocation = async () => {
    console.log('getting location');
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return false;
    }
    let loc = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });
    userLocation.current = loc;
    return true;
  };

  // animateMap will animate the map to the given location. If no time is given it will default to 1 second.
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

  // This is gross but needed. The onMapPress will always fire, even if you're pressing a marker.
  // My fix is to set a timeout on the marker press, and if the timeout is still active when the map press fires, we don't do anything.
  // This will need to be re-imagined in the future.
  const togglePanelVisibility = (state) => {
    if (state !== undefined) {
      setIsVisible(state);
    } else {
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }
  };

  const onMarkerPress = (marker, index) => {
    console.log('marker pressed!');
    clearTimeout(markerPressTimeout.current);
    setActiveMarkerIndex(index);
    markerPressed.current = true;
    props.onMarkerPress(marker);
    const timeout = setTimeout(() => {
      markerPressed.current = false;
    }, 200);
    markerPressTimeout.current = timeout;
    togglePanelVisibility(true);
  };

  // Code for hiding the bottom pannel if the user presses the map.
  const onMapPress = (e) => {
    // clearTimeout(debounceTimeout.current);
    // const timeout = setTimeout(() => {
    //   console.log(markerPressed);
    //   if (!markerPressed.current) {
    //     togglePanelVisibility(false);
    //     setActiveMarkerIndex(null);
    //   }
    // }, 50);
    // debounceTimeout.current = timeout;
  };

  // favourite marker will attempt to add or remove the marker from the users favourites. Also stores a local copy of the array
  const favouriteMarker = async (marker) => {
    if (favouriteMarkers.includes(marker.id)) {
      console.log('Removing marker from favourites');
      let res = await removeFavouriteMarker(marker.id);
      if (!res) {
        console.log('Failed to remove marker from favourites: ' + marker.id);
        return;
      }
      await setFavouriteMarkers(favouriteMarkers.filter((id) => id !== marker.id));
      console.log('Marker ' + marker.id + ' removed from favourites');
    } else {
      console.log('Adding marker to favourites');
      let res = await addFavouriteMarker(marker.id);
      if (!res) {
        console.log('Failed to add marker to favourites: ' + marker.id);
        return;
      }
      await setFavouriteMarkers([...favouriteMarkers, marker.id]);
      console.log('Marker ' + marker.id + ' added to favourites');
    }
  };

  // on the favourite toggle it will attempt to get the users favourite markers and set them to the map.
  const onFavouriteToggle = async () => {
    if (getuserIsAuthenticated()) {
      setFavouriteSelected(!favouriteSelected);
      let favMarkers = await getFavouriteMarkers();
      await setFavouriteMarkers(favMarkers);
    } else {
      setFavouriteSelected(false);
    }
  };

  // on the componenet load it will attempt to animate the map to the users location.
  useEffect(() => {
    getUserLocation().then((res) => {
      if (res) {
        animateMap(userLocation.current.coords);
      }
    });
  }, []);

  return (
    <>
      <View style={MapStyle.topContainer}>
        <Text style={MapStyle.switchText}>Favourites</Text>
        <Switch
          trackColor={{ false: colorScheme.colors.false, true: colorScheme.colors.true }}
          thumbColor={favouriteSelected ? colorScheme.colors.primary : colorScheme.colors.true}
          ios_backgroundColor="#777E7D"
          onValueChange={onFavouriteToggle}
          value={favouriteSelected}
        />

        <Button
          onPress={() => {
            if (userLocation) {
              animateMap(userLocation.current.coords);
            }
          }}
        >
          <Text>MyLocation</Text>
        </Button>
        <Button
          onPress={() => {
            animateMap(initialRegion);
          }}
        >
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
          if ((favouriteSelected && favouriteMarkers.includes(marker.id)) || !favouriteSelected) {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.name}
                onPress={() => {
                  onMarkerPress(marker, index);
                }}
              >
                <Callout alphaHitTest={true}>
                  <Text>{marker.name}</Text>
                </Callout>
              </Marker>
            );
          }
        })}
      </MapView>

      {/* This is the bottom card that is conditionally visible */}
      {isVisible && (
        <DatabaseDrawer style={MapStyle.drawer} favourite={favouriteMarker} marker={props.marker}></DatabaseDrawer>
      )}
    </>
  );
};

export default DatabaseMap;
