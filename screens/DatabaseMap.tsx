import React from "react";
import { Text, View, Dimensions, Animated } from "react-native";
import { Marker, Callout, CalloutSubview } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { Button, Switch } from "react-native-paper";
import * as Location from "expo-location";

import { MapStyle } from "../styles/mapStyle";

// This is the bottom sliding card that is displayed.
import MarkerSlidingPannel from "./DatabaseDrawer";

class BottomSheet extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      isVisible: false,
      activeMarkerIndex: null,
      debounceTimeout: null,
      markerPressed: false,
      markerPressTimeout: null,
      userLocation: null,
      initialRegion: {
        latitude: -37.840935,
        longitude: 144.946457,
        latitudeDelta: 0.922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange = (newRegion) => {
    this.props.onRegionChange(newRegion);
  };

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

  togglePanelVisibility = (state) => {
    if (state == true) {
      this.setState({ isVisible: true });
    } else if (state == false) {
      this.setState({ isVisible: false });
    } else {
      this.setState({ isVisible: !this.state.isVisible });
    }
  };

  // This is gross but needed. The onMapPress will always fire, even if you're pressing a marker.
  // My fix is to set a timeout on the marker press, and if the timeout is still active when the map press fires, we don't do anything.
  // This will need to be re-imagined in the future.
  onMarkerPress = (marker, index) => {
    clearTimeout(this.state.markerPressTimeout);
    clearTimeout(this.state.debounceTimeout);
    this.setState({ activeMarkerIndex: index, markerPressed: true });
    this.props.onMarkerPress(marker);
    const markerPressTimeout = setTimeout(() => {
      this.setState({ markerPressed: false });
    }, 250);
    this.setState({ markerPressTimeout });
    this.togglePanelVisibility(true);
  };

  onMapPress = (e) => {
    const debounceTimeout = setTimeout(() => {
      if (!this.state.markerPressed) {
        this.togglePanelVisibility(false);
        this.setState({ activeMarkerIndex: null });
      }
    }, 100);
    this.setState({ debounceTimeout });
  };

  componentDidMount() {
    this.getUserLocation().then((res) => {
      if (res) {
        this.animateMap(this.state.userLocation.coords);
      }
    });
    console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState) {}

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
              this.setState({
                favouriteSelected: !this.state.favouriteSelected,
              });
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
          {this.props.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}
              //   description={marker.description}
              onPress={() => {
                this.onMarkerPress(marker, index);
              }}
            />
          ))}
        </MapView>
        {isVisible && (
          <MarkerSlidingPannel marker={this.props.marker}></MarkerSlidingPannel>
        )}
      </>
    );
  }
}

export default BottomSheet;
