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
import MapView, { Marker, Callout } from "react-native-maps";
import { useEffect, useState, useContext } from "react";
import * as Location from "expo-location";
import main from "../styles/main";
import { render } from "react-dom";
import { SearchBar } from "react-native-screens";
import { State } from "react-native-gesture-handler";

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
  let temp1 = [],
    temp2 = [],
    newPos = [];

  const [errorMsg, setErrorMsg] = useState(null);
  // const [location, setLocation] = useState(null);
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
        temp1 = locally[i][0];
        temp2 = locally[i][1];

        let newPos = { lat: temp1, long: temp2 };
        // console.log(newPos);

        // const newPos = coords.map((coord) => {
        //   coord.lat = temp1;
        //   coord.long = temp2;
        // });

        setcoords((coords) => [...coords, newPos]);
      }

      // for (let i = 1; i < 3; i++) {
      //   temp1 = locally[i][0];
      //   temp2 = locally[i][1];

      //   console.log(temp1);
      //   console.log(temp2);
      // }
    })();
  }, []);

  const markers = [
    {
      latitude: -38.0270921,
      longitude: 145.2116802,
    },
    {
      latitude: -37.9716443,
      longitude: 145.2237479,
    },
    {
      latitude: -38.041583,
      longitude: 145.209861,
    },
    {
      latitude: -37.9854814,
      longitude: 145.2327025,
    },
  ];

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
    <View
      style={{
        flex: 1,
      }}
    >
      <MapView
        style={{
          flex: 1,
        }}
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
            title="title"
            description="melbourne charging locations available"
          >
            <CustomMarker />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
