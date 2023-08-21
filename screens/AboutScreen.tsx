// React imports.
import { useEffect } from "react";

// React Native imports.
import { 
  TouchableOpacity, 
  Alert 
} from "react-native";

// Navigation imports.
import {
  useNavigation,
  StackHeaderLeftButtonProps,
} from "@react-navigation/native";

// Themed component imports.
import { Text, View } from "../components/Themed";

// Custom component imports.
import MenuIcon from "../components/MenuIcon";

// Style imports.
import { AboutStyle } from "../styles/aboutStyle";
import { ButtonStyle } from "../styles/buttonStyle";

// Colour imports
import {Color} from "../constants/Colors"


function AboutScreen() {
    const navigation = useNavigation();
    const EvoleonAppDeets = require('../app.json');
    const deviceAppVersion = 'Pickles';
    const updateButtonText = 'Update';
    const termsButtonText = 'Ts & Cs';
    const privacyButtonText = 'Privacy Policy';
    const clearCacheButtonText = 'Clear Cache';

    // A place holder alert to add the clear cache functionality to. 
    const clearCacheAlert = () => 
      Alert.alert('Confirmation Required', 'Press OK to clear the cache.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    
    // Header menu, needs to be replaced with << back. 
    useEffect(() => {
        navigation.setOptions({
          headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
        });
      });

    return (
      <View style={AboutStyle.centered}>
        {/* TODO: Change all colour calls to this format for light and darkmode*/}
        <Text style={AboutStyle.currentVersion} lightColor="Color.light.Text" darkColor="Color.dark.Text">
          App Version: {deviceAppVersion}{' '}
        </Text>
        <Text style={AboutStyle.updateVersion} lightColor="Color.light.Text" darkColor="Color.dark.Text">
          Version Available: {EvoleonAppDeets.expo.version}{' '}
        </Text>
        <View style={ButtonStyle.updateButton}>
          <TouchableOpacity style={ButtonStyle.Button}>
            <Text style={ButtonStyle.Text}>{updateButtonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={ButtonStyle.termsButton}>
          <TouchableOpacity
            style={ButtonStyle.Button}
            onPress={() => {
              navigation.navigate('PrivacyPolicy');
            }}
          >
            <Text style={ButtonStyle.Text}>{privacyButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ButtonStyle.Button}
            onPress={() => {
              navigation.navigate('TermsAndConditionsScreen');
            }}
          >
            <Text style={ButtonStyle.Text}>{termsButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ButtonStyle.Button} onPress={clearCacheAlert}>
            <Text style={ButtonStyle.Text}>{clearCacheButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ marginTop: 20 }, ButtonStyle.Button]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={ButtonStyle.Text}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

}


export default AboutScreen;