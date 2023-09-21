import React, { useState, useEffect } from 'react';
import DatabaseMap from './DatabaseMap';
import testingCoords from '../locations.json';
import { Text, View, useTheme } from '../components/Themed';
import { createMapStyle } from '../styles/mapStyle';

const DatabaseScreen = (props) => {
  // This is the map style
  const colorScheme = useTheme();
  const MapStyle = createMapStyle(colorScheme);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [visibleRegion, setVisibleRegion] = useState(null);

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
