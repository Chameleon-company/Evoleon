import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, Animated } from 'react-native';
import { Marker, Callout, CalloutSubview } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import * as Location from 'expo-location';
import IconButton from '../components/IconButton';
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
  // This is the map style
  const colorScheme = useTheme();
  const MapStyle = createMapStyle(colorScheme);

  //Ref for the map
  const mapRef = useRef(null);
  //Vars for the active marker
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  //Vars for workign out if the bototm card should be visible
  const [isVisible, setIsVisible] = useState(false);
  const [favouriteSelected, setFavouriteSelected] = useState(false);
  const [favouriteMarkers, setFavouriteMarkers] = useState([]);
  const userLocation = useRef(null);
  // Default region of melbourne
  const [initialRegion, setInitialRegion] = useState({
    latitude: -37.840935,
    longitude: 144.946457,
    latitudeDelta: 0.922,
    longitudeDelta: 0.0421,
  });

  // getUserLocation will attempt to get the users location and store it in the userLocation state.
  const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return false;
    }

    const loc = await Location.getCurrentPositionAsync({
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

  const onMarkerPress = (marker, index) => {
    console.log('marker pressed!');
    setActiveMarkerIndex(index);
    props.onMarkerPress(marker);
    setIsVisible(true);
  };

  // fires when the map is pressed, currently un-used but is handy to know
  const onMapPress = (e) => {};

  // favourite marker will attempt to add or remove the marker from the users favourites. Also stores a local copy of the array
  const favouriteMarker = async (marker) => {
    const { id } = marker;
    const isFavourite = favouriteMarkers.includes(id);
    const action = isFavourite ? removeFavouriteMarker : addFavouriteMarker;
    const updatedFavourites = isFavourite
      ? favouriteMarkers.filter((existingId) => existingId !== id)
      : [...favouriteMarkers, id];

    const res = await action(id);

    if (res) {
      setFavouriteMarkers(updatedFavourites);
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
      {/* These are the top right controls */}
      <View style={MapStyle.sideContainer}>
        <IconButton
          icon="direction"
          style={{}}
          onPress={() => {
            animateMap(userLocation.current.coords);
          }}
        />
        <IconButton
          icon="heart"
          style={{
            marginTop: 10,
          }}
          onPress={() => {
            onFavouriteToggle();
          }}
        />
      </View>
      {/* This is the map */}
      <MapView
        showsUserLocation={true}
        ref={mapRef}
        onPress={onMapPress}
        initialRegion={initialRegion}
        // mapType="hybrid"
        style={MapStyle.ViewStyle}
        onRegionChangeComplete={props.onRegionChange}
        zoomEnabled={true}
      >
        {/* This creates all the markers visible  */}
        {props.markers.map((marker, index) => {
          if ((favouriteSelected && favouriteMarkers.includes(marker.id)) || !favouriteSelected) {
            return (
              <Marker
                style={MapStyle.MapMarkerBody}
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
                  <Text style={MapStyle.MapMarkerText}>{marker.name}</Text>
                </Callout>
              </Marker>
            );
          }
        })}
      </MapView>
      {/* This is the bottom card that is conditionally visible */}
      {isVisible && (
        <DatabaseDrawer setVisibility={setIsVisible} favourite={favouriteMarker} marker={props.marker}></DatabaseDrawer>
      )}
    </>
  );
};

export default DatabaseMap;
