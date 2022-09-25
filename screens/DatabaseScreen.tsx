import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { StyleSheet, Dimensions } from 'react-native';
import MenuIcon from '../components/MenuIcon';
import MapView, { Marker,Callout } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import main from '../styles/main';
import { render } from 'react-dom';
import { SearchBar } from 'react-native-screens';
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
  
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={{ alignSelf: 'stretch', height: '100%' }}
//         // region={mapRegion}
//        initialRegion={{
//           latitude: -37.840935,
//           longitude: 144.946457,
//           latitudeDelta: 0.922,
//           longitudeDelta: 0.0421,
//         }}
//         >
          
//         <Marker 
//         coordinate={{latitude:-37.875937,
//         longitude:145.159616,}}
//         > 
//          <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />

//          </Marker>
//          <Marker 
//         coordinate={{latitude:-37.804359,
//         longitude:144.87952,}}
//         > 
//          <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />

//          </Marker>
//          <Marker 
//         coordinate={{latitude:-37.738141,
//         longitude:144.971459,}}
//         > 
//          <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />

//          </Marker>
//          <Marker 
//         coordinate={{latitude:-37.897614,
//         longitude:145.015414,}}
//         > 
//          <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />

//          </Marker>
//       </MapView>
     
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

const markers = [
  {
    latitude: -38.0270921,
    longitude: 145.2116802,
    }, 
    {
      latitude: -37.9716443,
      longitude:145.2237479,
    },
    {
      latitude: -38.041583,
      longitude: 145.209861,
    },
    {
      latitude: -37.9854814,
      longitude: 145.2327025,
    }, 
    
    {
      latitude: -38.0547951,
      longitude: 145.1159521,
    }, 
    {
      latitude: -38.002297,
      longitude:145.250432,
    }, 
    {
      latitude: -37.9219276,
      longitude: 145.1575352,
    }, 
    {
      latitude: -37.9528594,
      longitude: 145.1800715,
    }, 
    {
      latitude: -37.9078295,
      longitude: 145.1311389,
    }, 
    {
      latitude: -37.9854814,
      longitude: 145.2327025,
    },  {
      latitude: -38.0547951,
      longitude: 145.1159521,
    },  {
      latitude: -38.002297,
      longitude: 145.250432,
    },  {
      latitude: -37.9528594,
      longitude: 145.1800715,
    },  {
      latitude: -37.8208618,
      longitude: 145.0398254,
    },  {
      latitude: -37.8760732,
      longitude: 145.0436879,
    },  {
      latitude: -37.9593761,
      longitude: 145.0177174,
    },  {
      latitude: -37.9584609,
      longitude: 145.0548509,
    },  {
      latitude: -37.9509025,
      longitude:145.0803493,
    },  {
      latitude: -37.886676,
      longitude: 145.081194,
    },  {
      latitude: -37.8147452,
      longitude: 145.2295859,
    },  {
      latitude: -37.9427717,
      longitude: 145.117778,
    },  {
      latitude: -37.9326298,
      longitude:145.0977292,
    },  {
      latitude: -38.1099888,
      longitude:145.336415,
    },  {
      latitude: -37.9556732,
      longitude:145.0385755,
    },  {
      latitude: -37.8448741,
      longitude: 145.0420954,
    },  {
      latitude: -38.0870087,
      longitude: 145.2795685,
    },  {
      latitude: -37.9058135,
      longitude: 145.159594,
    },  {
      latitude: -37.9280757,
      longitude: 145.1437915,
    },  {
      latitude: -37.7852548,
      longitude: 145.1257933,
    },  {
      latitude: -37.9357283,
      longitude: 145.1898176,
    },  {
      latitude: -37.8486608,
      longitude: 144.9925299,
    },  {
      latitude: -37.7621431,
      longitude: 145.168488,
    },  {
      latitude: -37.9121995,
      longitude: 145.1349813,
    },  {
      latitude: -38.1069358,
      longitude: 145.2502657,
    },  {
      latitude: -37.821678,
      longitude: 145.1240832,
    },  {
      latitude: -37.8717032,
      longitude: 145.244814,
    },  {
      latitude: -37.811869,
      longitude: 145.0123035,
    },  {
      latitude: -37.9214041,
      longitude:145.2375523,
    },  {
      latitude: -37.8443581,
      longitude: 145.111212,
    },  {
      latitude: -37.787866,
      longitude: 145.1240894,
    }, 
    {
      latitude: -37.832143,
      longitude: 144.995688,
    }, {
      latitude: -37.9031845,
      longitude: 145.0954823,
    }, {
      latitude: -37.8481018,
      longitude: 144.9790394,
    }, {
      latitude: -37.8352008,
      longitude: 145.1640819,
    }, {
      latitude: -37.8158872,
      longitude:144.9595931,
    }, {
      latitude: -37.8493627,
      longitude: 144.9781768,
    }, {
      latitude: -37.8377242,
      longitude: 144.9954705,
    }, {
      latitude: -37.8143033,
      longitude: 144.973402,
    }, {
      latitude: -37.8148268,
      longitude: 144.9697022,
    }, {
      latitude: -37.8499608,
      longitude: 144.9784496,
    }, {
      latitude: -37.8481433,
      longitude: 144.9923793,
    }, {
      latitude: -37.862284,
      longitude: 144.973965,
    }, {
      latitude: -37.8100453,
      longitude: 144.970528,
    }, {
      latitude: -37.863358,
      longitude: 145.353055,
    }, {
      latitude: -37.8861421,
      longitude: 145.0826588,
    }, {
      latitude: -37.7969198,
      longitude: 145.2798645,
    }, {
      latitude: -37.8132469,
      longitude: 144.937184,
    }, {
      latitude: -37.8162367,
      longitude: 144.9548037,
    }, {
      latitude: -37.7401647,
      longitude: 145.0043045,
    }, {
      latitude: -37.8122418,
      longitude: 145.0108122,
    }, {
      latitude: -37.8286488,
      longitude: 145.0563957,
    }, {
      latitude: -37.7591293,
      longitude: 145.0685473,
    }, {
      latitude: -37.8634194,
      longitude: 145.0272358,
    }, {
      latitude: -37.813111,
      longitude: 144.955756,
    }, {
      latitude: -37.816238,
      longitude: 144.970955,
    }, {
      latitude: -37.805694,
      longitude: 144.9636109,
    }, {
      latitude: -37.8177027,
      longitude:144.9712506,
    }, {
      latitude: -37.8198211,
      longitude: 144.9583003,
    }, {
      latitude: -38.2207233,
      longitude: 145.0612025,
    }, {
      latitude: -38.1404264,
      longitude: 145.1251614,
    }, {
      latitude: -37.7737797,
      longitude: 144.9618942,
    }, {
      latitude: -37.8543276,
      longitude: 144.981272,
    }, {
      latitude: -37.8044708,
      longitude: 144.9932696,
    }, {
      latitude: -38.2344065,
      longitude: 145.0510339,
    }, {
      latitude: -37.8808127,
      longitude: 145.0225901,
    }, {
      latitude: -37.7234884,
      longitude: 145.1417052,
    }, {
      latitude: -37.7714494,
      longitude: 144.961989,
    }, {
      latitude: -37.7020501,
      longitude: 145.1026987,
    }, {
      latitude: -37.8542427,
      longitude: 145.1043361,
    }, {
      latitude: -37.8283249,
      longitude: 144.9257637,
    }, {
      latitude: -37.8132086,
      longitude: 145.0097036,
    }, 
    {
      latitude: -37.8197106,
      longitude: 145.0130928,
    }, {
      latitude: -37.812753,
      longitude: 144.939872,
    }, {
      latitude: -37.83192,
      longitude: 145.2138971,
    }, {
      latitude: -37.7018751,
      longitude: 145.073026,
    }, {
      latitude: -37.7670839,
      longitude: 145.0306003,
    }, {
      latitude: -37.8180822,
      longitude: 144.964023,
    }, {
      latitude: -37.8224143,
      longitude: 144.9352029,
    }, {
      latitude: -37.8754685,
      longitude: 145.1651138,
    }, {
      latitude: -37.828786,
      longitude: 144.9354423,
    }, {
      latitude: -37.8465,
      longitude: 145.0458149,
    }, {
      latitude: -37.8217261,
      longitude: 144.9651844,
    }, {
      latitude: -38.1018166,
      longitude: 145.2488922,
    }, {
      latitude: -37.7620701,
      longitude:145.1678517,
    }, {
      latitude: -37.899758,
      longitude: 145.2478032,
    }, {
      latitude: -37.8031931,
      longitude: 144.9717675,
    }, {
      latitude: -37.8305621,
      longitude: 144.9961673,
    }, {
      latitude: -37.7399362,
      longitude: 145.0107588,
    }, {
      latitude: -37.7663276,
      longitude: 145.0452909,
    }, {
      latitude: -37.7295518,
      longitude: 145.0573137,
    }, {
      latitude: -37.825054,
      longitude: 145.1802287,
    }, {
      latitude: -38.2445287,
      longitude: 145.0373824,
    }, {
      latitude: -37.8898697,
      longitude: 145.047128,
    }, {
      latitude: -38.037857,
      longitude: 145.339816,
    }, {
      latitude: -37.7836174,
      longitude: 145.1261033,
    }, 
];

const CustomMarker = () => {
  return(
    
    <View>
       <Image source={require('../assets/EvoleonFinal.png')} style={{height: 20, width:20 }} />
     
    </View>
  )
}


return(
  <View style={{
    flex: 1,
  }}>
    <MapView style={{
      flex: 1,
    }}
      showsUserLocation={true}
      initialRegion={{
        latitude: -37.840935,
        longitude: 144.946457,
        latitudeDelta: 0.922,
        longitudeDelta:0.0421,
      }}
      zoomEnabled={true}
    >
      {
        markers.map((val) => (
          <Marker coordinate={{
            latitude: val.latitude,
            longitude: val.longitude,
          }}title='Evoleon charging point'
          description='melbourne charging locations available'>
            <CustomMarker />
            
          </Marker>
        ))
      }
    </MapView>
  </View>
)
    
}
