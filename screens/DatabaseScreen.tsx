import React from "react";
import { View } from "react-native";
import { MapStyle } from "../styles/mapStyle";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import BottomSheet from "./DatabaseMap";
import MenuIcon from "../components/MenuIcon";
import testingCoords from "../TempMarkerLocations.json";

class DatabaseScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMarker: null,
      visibleRegion: null,
      visibleMarkers: [],
    };
  }

  setVisibleRegion = (region) => {
    this.setState({ visibleRegion: region });
  };

  isLocationVisible = (location) => {
    if (!this.state.visibleRegion) return false;

    const { latitude, longitude, latitudeDelta, longitudeDelta } =
      this.state.visibleRegion;
    const latMin = latitude - latitudeDelta / 2;
    const latMax = latitude + latitudeDelta / 2;
    const lonMin = longitude - longitudeDelta / 2;
    const lonMax = longitude + longitudeDelta / 2;

    return (
      location.latitude >= latMin &&
      location.latitude <= latMax &&
      location.longitude >= lonMin &&
      location.longitude <= lonMax
    );
  };

  handleMarkerPress = (marker) => {
    this.setState({ selectedMarker: marker }, () => {});
  };

  componentDidMount() {
    // To display the hamburger top left
    this.props.navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  }

  render() {
    return (
      <View style={MapStyle.ViewStyle}>
        <BottomSheet
          // markers={testingCoords}
          markers={testingCoords.filter(this.isLocationVisible)}
          marker={this.state.selectedMarker}
          onMarkerPress={this.handleMarkerPress}
          onRegionChange={this.setVisibleRegion}
        />
      </View>
    );
  }
}

export default DatabaseScreen;
