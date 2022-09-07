import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { StyleSheet, Dimensions } from 'react-native';
import MenuIcon from '../components/MenuIcon';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import main from '../styles/main';

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
        headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
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
  
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        // region={mapRegion}
       initialRegion={{
          latitude: -37.840935,
          longitude: 144.946457,
          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,
        }}
        >
        <Marker 
        coordinate={{latitude:-37.875937,
        longitude:145.159616,}}
        > 
         <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />

         </Marker>
         <Marker 
        coordinate={{latitude:-37.804359,
        longitude:144.87952,}}
        > 
         <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />

         </Marker>
         <Marker 
        coordinate={{latitude:-37.738141,
        longitude:144.971459,}}
        > 
         <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />

         </Marker>
         <Marker 
        coordinate={{latitude:-37.897614,
        longitude:145.015414,}}
        > 
         <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />

         </Marker>
      </MapView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
