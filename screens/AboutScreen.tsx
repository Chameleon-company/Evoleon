import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
//import DeviceInfo from 'react-native-device-info';

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { useEffect } from "react";
import main from "../styles/main";
import { ButtonStyle } from '../styles/buttonStyle';

function AboutScreen() {
    const navigation = useNavigation();
    const EvoleonAppDeets = require('../app.json');
    const deviceAppVersion = 'Pickles' // DeviceInfo.getVersion();
    const upDateButton = '     Update     ';
    const termsButton = ' Ts & Cs ';
    const privacyButton = 'Privacy Policy';
    const clearCache = ' Clear Cache ';

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
    <View style={main.centered}>
        <Text style={styles.currentVersion} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        App Version: {deviceAppVersion} </Text>
        <Text style={styles.updateVersion} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        Version Available: {EvoleonAppDeets.expo.version} </Text>
        <View style={styles.updateButton}>
          <TouchableOpacity style={ButtonStyle.Button}>
            <Text style={ButtonStyle.Text}>{upDateButton}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.termsButton}>
          <TouchableOpacity style={ButtonStyle.Button} onPress={() => {
                        navigation.navigate("PrivacyPolicy");
                    }}>
            <Text style={ButtonStyle.Text}>{privacyButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ButtonStyle.Button} onPress={() => {
                        navigation.navigate("TermsAndConditionsScreen");
                    }}>
            <Text style={ButtonStyle.Text}>{termsButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ButtonStyle.Button}
            onPress={clearCacheAlert}>
            <Text style={ButtonStyle.Text}>{clearCache}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ marginTop: 20 }, ButtonStyle.Button]}
            onPress={() => {
                navigation.goBack();
            }}>
            <Text style={ButtonStyle.Text}>Back</Text>
        </TouchableOpacity>
        </View>
    </View>
    );

}

export const styles = StyleSheet.create({
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