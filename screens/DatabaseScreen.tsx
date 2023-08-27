import React, { useState, useEffect } from 'react';
import { createMapStyle } from '../styles/mapStyle';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Text, View, useTheme } from '../components/Themed';
import DatabaseMap from './DatabaseMap';
import MenuIcon from '../components/MenuIcon';
import testingCoords from '../locations.json';

const DatabaseScreen = (props) => {
  const colorScheme = useTheme();

  const MapStyle = createMapStyle(colorScheme);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [visibleRegion, setVisibleRegion] = useState(null);
  const [visibleMarkers, setVisibleMarkers] = useState([]);

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

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <View style={MapStyle.ViewStyle}>
      <DatabaseMap
        markers={testingCoords.filter(isLocationVisible)}
        marker={selectedMarker}
        onMarkerPress={handleMarkerPress}
        onRegionChange={setVisibleRegion}
      />
    </View>
  );
};

export default DatabaseScreen;
