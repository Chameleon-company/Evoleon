import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Image } from "react-native";
import { LocationContext } from "../context/locations.context";
import { fetchLocations } from "../web/firebase";
import MarkerItem from "../context/markerItem";

import { Text, View } from "../components/Themed";
import { StyleSheet, Dimensions } from "react-native";
import MenuIcon from "../components/MenuIcon";
import { Marker, Callout } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { useEffect, useState, useContext } from "react";
import * as Location from "expo-location";
import main from "../styles/main";
import { render } from "react-dom";
import { SearchBar } from "react-native-screens";
import { State } from "react-native-gesture-handler";

import { MapStyle } from "../styles/mapStyle";
import { getChargerLocationAmenityAvailable } from "../view/mapFunctions";

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
  let tempLat, tempLong, dining, restroom, park;

  const [errorMsg, setErrorMsg] = useState(null);
  const [dbLocations, setdbLocations] = useState([]);
  const [region, setRegion] = useState(null);
  const [coords, setcoords] = useState(initialPos);

  useEffect(() => {
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
      // console.log(location);
      // setRegion(location)
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

        let newPos = {
          lat: tempLat,
          long: tempLong,
          Dining: dining,
          Restroom: restroom,
          Park: park,
        };

        setcoords((coords) => [...coords, newPos]);
      }
    })();
  }, []);

  const CustomMarker = () => {
    return (
      <View>
        <Image
          source={require("../assets/EvoleonFinal.png")}
          style={{ height: 20, width: 20 }}
        />
      </View>
    );
  };

  return (
    <View style={MapStyle.ViewStyle}>
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
            <CustomMarker />

            <Callout tooltip={true}>
              <View style={MapStyle.MarkerPopupStyle}>
                <Text style={MapStyle.MarkerPopupStyleTextTitle}>
                  {" "}
                  Australia EV Station{" "}
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
                  <Image
                    source={require("../assets/Favourite.png")}
                    style={MapStyle.IconStyle}
                  />
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
