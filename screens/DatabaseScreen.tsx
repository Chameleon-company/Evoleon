import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Image, Switch } from 'react-native';

import { Text, View } from '../components/Themed';
import { StyleSheet, Dimensions } from 'react-native';
import MenuIcon from '../components/MenuIcon';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import main from '../styles/main';
import { render } from 'react-dom';
import { SearchBar } from 'react-native-screens';
import { MapStyle } from "../styles/mapStyle";
import { addEvChargerLocationToUserFavouritesInDatabase, getChargerLocationAmenityAvailable } from '../view/mapFunctions';

export default function DatabaseScreen() {
  const navigation = useNavigation();

  const [mapRegion, setmapRegion] = useState({
    latitude: -37.840935,
    longitude: 144.946457,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      navigation.setOptions({
        headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon />)
      });

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 5
      });
      console.log(location);
      // setRegion(location)
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })


    })();
  }, []);



  
  //Test data - users favourite EV Charger locations
  const favouriteMarkers = [
    {
      id: 15,
      latitude: -37.8760732,
      longitude: 145.0436879,
      Dining: true,
      Park: true,
      Restroom: true
    }, {
      id: 16,
      latitude: -37.9593761,
      longitude: 145.0177174,
      Dining: false,
      Park: false,
      Restroom: false
    }, {
      id: 17,
      latitude: -37.9584609,
      longitude: 145.0548509,
      Dining: false,
      Park: true,
      Restroom: true
    }
  ]



  const markers = [
    {
      id: 1,
      latitude: -38.0270921,
      longitude: 145.2116802,
      Dining: false,
      Park: true,
      Restroom: true
    },
    {
      id: 2,
      latitude: -37.9716443,
      longitude: 145.2237479,
      Dining: true,
      Park: false,
      Restroom: true
    },
    {
      id: 3,
      latitude: -38.041583,
      longitude: 145.209861,
      Dining: false,
      Park: false,
      Restroom: false
    },
    {
      id: 4,
      latitude: -37.9854814,
      longitude: 145.2327025,
      Dining: true,
      Park: true,
      Restroom: true
    },

    {
      id: 5,
      latitude: -38.0547951,
      longitude: 145.1159521,
      Dining: true,
      Park: false,
      Restroom: true
    },
    {
      id: 6,
      latitude: -38.002297,
      longitude: 145.250432,
      Dining: true,
      Park: false,
      Restroom: true
    },
    {
      id: 7,
      latitude: -37.9219276,
      longitude: 145.1575352,
      Dining: false,
      Park: true,
      Restroom: true
    },
    {
      id: 8,
      latitude: -37.9528594,
      longitude: 145.1800715,
      Dining: false,
      Park: true,
      Restroom: false
    },
    {
      id: 9,
      latitude: -37.9078295,
      longitude: 145.1311389,
      Dining: true,
      Park: true,
      Restroom: true
    },
    {
      id: 10,
      latitude: -37.9854814,
      longitude: 145.2327025,
      Dining: true,
      Park: true,
      Restroom: true
    }, {
      id: 11,
      latitude: -38.0547951,
      longitude: 145.1159521,
      Dining: false,
      Park: true,
      Restroom: true
    }, {
      id: 12,
      latitude: -38.002297,
      longitude: 145.250432,
      Dining: true,
      Park: true,
      Restroom: true
    }, {
      id: 13,
      latitude: -37.9528594,
      longitude: 145.1800715,
      Dining: true,
      Park: true,
      Restroom: false
    }, {
      id: 14,
      latitude: -37.8208618,
      longitude: 145.0398254,
      Dining: true,
      Park: true,
      Restroom: true
    }, {
      id: 15,
      latitude: -37.8760732,
      longitude: 145.0436879,
      Dining: true,
      Park: true,
      Restroom: true
    }, {
      id: 16,
      latitude: -37.9593761,
      longitude: 145.0177174,
      Dining: false,
      Park: false,
      Restroom: false
    }, {
      id: 17,
      latitude: -37.9584609,
      longitude: 145.0548509,
      Dining: false,
      Park: true,
      Restroom: true
    }
  ];


  const CustomMarker = () => {
    return (

      <View>
        <Image source={require('../assets/EvoleonFinal.png')} style={{ height: 20, width: 20 }} />
      </View>
    )
  }

  //If switch is enabled, show only the users favourited EV charger locations on the map
  const [favouriteSelected, setFavouriteSelectedSwitch] = useState(false);
  let [displayedMarkers, setMarkers] = useState(markers);

  const updateMarkers = (m: React.SetStateAction<{ id: number; latitude: number; longitude: number; Dining: boolean; Park: boolean; Restroom: boolean; }[]>) => {
    setMarkers(m);
  }

  const toggleSwitch = () => {
    setFavouriteSelectedSwitch(previousState => !previousState);

    if(favouriteSelected == false){
      console.log("Show only favourited markers");
      updateMarkers(favouriteMarkers);
    } else {
      updateMarkers(markers);
      console.log("Show all markers");
    }
  }

  return (
    <View style={
      MapStyle.ViewStyle
    }>
      <View style={MapStyle.switchContainer}>
        <Text style={MapStyle.switchText} >Favourites</Text>
        <Switch 
          trackColor={{ false: "#767577", true: "#E9ECE6" }}
          thumbColor={favouriteSelected ? "#18A554" : "#f4f3f4"}
          ios_backgroundColor="#777E7D"
          onValueChange={toggleSwitch}
          value={favouriteSelected}/>
      </View>

      <MapView style={
        MapStyle.ViewStyle
      }
        showsUserLocation={true}
        initialRegion={{
          latitude: -37.840935,
          longitude: 144.946457,
          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
      >
        {
          displayedMarkers.map((val) => (
            <Marker key={val.id} coordinate={{
              latitude: val.latitude,
              longitude: val.longitude,
            }}
              title='Evoleon charging point'
              description='melbourne charging locations available'
            >
              <CustomMarker />

              <Callout tooltip={true}>
                <View style={MapStyle.MarkerPopupStyle}>
                  <Text style={MapStyle.MarkerPopupStyleTextTitle}> Australia EV Station </Text>
                  <Text style={MapStyle.MarkerPopupStyleText}> {getChargerLocationAmenityAvailable(val)}</Text>
                  <View style={MapStyle.IconPosition}>
                    <Image source={require('../assets/Direction.png')} style={MapStyle.IconStyle} />
                    <Image source={require('../assets/Start.png')} style={MapStyle.IconStyle} />
                    <Image source={require('../assets/Info.png')} style={MapStyle.IconStyle} />
                    <CalloutSubview onPress={() => {
                          addEvChargerLocationToUserFavouritesInDatabase(val);
                        }}>
                        <Image style={MapStyle.IconStyle} source={require('../assets/Favourite.png')}/>
                    </CalloutSubview>
                  </View>
                </View>
              </Callout>


            </Marker>
          ))
        }
      </MapView>
    </View>
  )
}
