import React from "react";
import { Text, View, Dimensions, Animated } from "react-native";
import { Marker, Callout, CalloutSubview } from "react-native-maps"; // Never use CalloutSubview, it doesn't work on Android for buttons.
import MapView from "react-native-map-clustering";
import { Button, Switch } from "react-native-paper";
import * as Location from "expo-location";

import { MapStyle } from "../styles/mapStyle";

import { getFavouriteMarkers, getuserIsAuthenticated } from "../web/firebase";

// This is the bottom sliding card that is displayed.
import MarkerSlidingPannel from "./DatabaseDrawer";

export default class DatabaseMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef(); // This is used to reference the map, so we can animate it.
    this.state = {
      isVisible: false, // This is used to toggle the sliding panel on/off.
      activeMarkerIndex: null, // This is the index of the active marker, used to display the correct marker in the sliding panel.
      debounceTimeout: null, // This is used to debounce the onMapPress function.
      markerPressed: false, // This is used to stop the onMapPress from firing when a marker is pressed.
      markerPressTimeout: null, // This is used to stop the onMapPress from firing when a marker is pressed.
      favouriteSelected: false, // This is used to toggle the favourite button on/off, could pull from user settings in future from firebase.
      favouriteMarkers: [], // This is the list of markers that are favourited by the user.
      userLocation: null, // This is the users current location, used to center the map on them.
      initialRegion: {
        // This is the initial region that the map will load to. Currently set to Melbourne.
        latitude: -37.840935,
        longitude: 144.946457,
        latitudeDelta: 0.922,
        longitudeDelta: 0.0421,
      },
    };
  }
  // Fires when the map is moved around.
  onRegionChange = (newRegion) => {
    // Fires the parent component function to set the visible region.
    this.props.onRegionChange(newRegion);
  };

  // Attempts to get the users location
  getUserLocation = async () => {
    console.log("getting location");
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return false;
    }
    let userLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });
    this.setState({ userLocation });
    return true;
  };

  // This is used to animate the map to any given location.
  animateMap = (loc, time = 1000) => {
    if (!loc) {
      return;
    }
    this.mapRef.current.animateToRegion(
      {
        // Takes a region object as parameter
        longitude: loc.longitude,
        latitude: loc.latitude,
        latitudeDelta: loc.latitudeDelta ? loc.latitudeDelta : 0.25,
        longitudeDelta: loc.longitudeDelta ? loc.longitudeDelta : 0.25,
      },
      time
    );
  };

  // toggles the state, or sets the state to the defined state
  togglePanelVisibility = (state) => {
    if (state != undefined) {
      this.setState({ isVisible: state });
    } else {
      this.setState({ isVisible: !this.state.isVisible });
    }
  };

  // This is gross but needed. The onMapPress will always fire, even if you're pressing a marker.
  // My fix is to set a timeout on the marker press, and if the timeout is still active when the map press fires, we don't do anything.
  // This will need to be re-imagined in the future.
  onMarkerPress = (marker, index) => {
    clearTimeout(this.state.markerPressTimeout);
    this.setState({ activeMarkerIndex: index, markerPressed: true });
    this.props.onMarkerPress(marker);
    const markerPressTimeout = setTimeout(() => {
      this.setState({ markerPressed: false });
    }, 200);
    this.setState({ markerPressTimeout });
    this.togglePanelVisibility(true);
  };

  onMapPress = (e) => {
    const debounceTimeout = setTimeout(() => {
      if (!this.state.markerPressed) {
        this.togglePanelVisibility(false);
        this.setState({ activeMarkerIndex: null });
      }
    }, 50);
    this.setState({ debounceTimeout });
  };

  // This is used to toggle the favourite button on/off, if the user is logged in it will get their favourites and only show them.
  // TODO: Pass through navigation prop from parent to create an event listener so i can update the favourites when the user logs in.
  // TODO: Add some toast to let the user know they need to log in to see their favourites.
  onFavouriteToggle = async () => {
    if (getuserIsAuthenticated()) {
      this.setState({
        favouriteSelected: !this.state.favouriteSelected,
      });
      let favMarkers = await getFavouriteMarkers();
      await this.setState({ favouriteMarkers: favMarkers });
    } else {
      this.setState({
        favouriteSelected: false,
      });
    }
  };

  // Get users location when the component mounts.
  componentDidMount() {
    this.getUserLocation().then((res) => {
      if (res) {
        this.animateMap(this.state.userLocation.coords);
      }
    });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <View style={MapStyle.topContainer}>
          <Text style={MapStyle.switchText}>Favourites</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#E9ECE6" }}
            thumbColor={this.state.favouriteSelected ? "#18A554" : "#f4f3f4"}
            ios_backgroundColor="#777E7D"
            onValueChange={() => {
              this.onFavouriteToggle();
            }}
            value={this.state.favouriteSelected}
          />

          <Button
            onPress={() => {
              if (this.state.userLocation) {
                this.animateMap(this.state.userLocation.coords);
              }
            }}
          >
            <Text>MyLocation</Text>
          </Button>
          <Button
            onPress={() => {
              this.animateMap(this.state.initialRegion);
            }}
          >
            <Text>TestingLocation</Text>
          </Button>
        </View>
        <MapView
          showsUserLocation={true}
          ref={this.mapRef}
          onPress={this.onMapPress}
          initialRegion={this.state.initialRegion}
          style={MapStyle.ViewStyle}
          onRegionChangeComplete={this.onRegionChange}
          zoomEnabled={true}
        >
          {this.props.markers.map((marker, index) => {
            if (
              (this.state.favouriteSelected &&
                this.state.favouriteMarkers.includes(marker.id)) ||
              !this.state.favouriteSelected
            ) {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  title={marker.name}
                  onPress={() => {
                    this.onMarkerPress(marker, index);
                  }}
                />
              );
            }
          })}
        </MapView>
        {isVisible && (
          <MarkerSlidingPannel marker={this.props.marker}></MarkerSlidingPannel>
        )}
      </>
    );
  }
}
