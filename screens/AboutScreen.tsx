// Importing required modules and components
import React, { useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import main from "../styles/main";
import { ButtonStyle } from '../styles/buttonStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Defining the AboutScreen component
const AboutScreen = () => {
    const navigation = useNavigation(); // Getting navigation object

    // Getting app details
    const EvoleonAppDeets = require('../app.json');
    
    // Setting device app version
    const deviceAppVersion = 'Pickles'; // Use DeviceInfo.getVersion();

    // Button label constants
    const upDateButton = '     Update     ';
    const termsButton = ' Ts & Cs ';
    const privacyButton = 'Privacy Policy';
    const clearCache = ' Clear Cache ';

    // Function to alert when clear cache is clicked
    const clearCacheAlert = () => 
      Alert.alert('Confirmation Required', 'Press OK to clear the cache.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    // Set the left header component
    useEffect(() => {
        navigation.setOptions({
          headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
        });
      }, [navigation]);

    // Render component
    return (
    <View style={main.centered}>
        <Text style={styles.currentVersion} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          App Version: {deviceAppVersion}
        </Text>
        <Text style={styles.updateVersion} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Version Available: {EvoleonAppDeets.expo.version}
        </Text>
        <View style={styles.updateButton}>
          <TouchableOpacity style={ButtonStyle.Button}>
            <Text style={ButtonStyle.Text}>{upDateButton}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.termsButton}>
          <TouchableOpacity style={ButtonStyle.Button} onPress={() => navigation.navigate("PrivacyPolicy")}>
            <Text style={ButtonStyle.Text}>{privacyButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ButtonStyle.Button} onPress={() => navigation.navigate("TermsAndConditionsScreen")}>
            <Text style={ButtonStyle.Text}>{termsButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ButtonStyle.Button} onPress={clearCacheAlert}>
            <Text style={ButtonStyle.Text}>{clearCache}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ marginTop: 20 }, ButtonStyle.Button]} onPress={() => navigation.goBack()}>
            <Text style={ButtonStyle.Text}>Back</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
}

// Defining component styles
const styles = StyleSheet.create({
  currentVersion: {
    position: 'absolute',
    top: 100,
  },
    termsButton: {
      backgroundColor: '#E9ECE6',
      position: 'absolute',
      top: 300,
    },
    updateButton: {
      backgroundColor: '#E9ECE6',
      position: 'absolute',
      top: 160,
    },
    updateVersion: {
      backgroundColor: '#E9ECE6',
      position: 'absolute',
      top: 120,
    },
  })
  
  export default AboutScreen;
  