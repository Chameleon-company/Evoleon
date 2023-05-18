import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { MapStyle } from "../styles/mapStyle";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import DatabaseMap from "./DatabaseMap";
import MenuIcon from "../components/MenuIcon";
import testingCoords from "../locations.json";

// DatabaseScreen component
const DatabaseScreen = (props) => {
  // States
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [visibleRegion, setVisibleRegion] = useState(null);

  // Check if a location is within the visible region of the map
  const isLocationVisible = (location) => {
    if (!visibleRegion) return false;

    const { latitude, longitude, latitudeDelta, longitudeDelta } = visibleRegion;
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

  // Filter visible markers based on visible region
  const visibleMarkers = testingCoords.filter(isLocationVisible);
  
  // Handle marker press events
  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
  };

  // Set navigation options on component load
  useEffect(() => {
    // Display the hamburger icon at the top left
    props.navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  }, []);

  // Render
  return (
    <View style={MapStyle.ViewStyle}>
      <DatabaseMap
        markers={visibleMarkers}
        marker={selectedMarker}
        onMarkerPress={handleMarkerPress}
        onRegionChange={setVisibleRegion}
      />
    </View>
  );
};

export default DatabaseScreen;
