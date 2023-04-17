import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';
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
    const deviceAppVersion = 'Pickles' //DeviceInfo.getVersion();
    const upDateButton = 'Update';


    console.log(EvoleonAppDeets.expo.version);
    
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
    </View>
    );

}

export const styles = StyleSheet.create({
  currentVersion: {
    position: 'absolute',
    top: 100,
  },
  updateButton: {
    position: 'absolute',
    top: 160,
  },
  updateVersion: {
    position: 'absolute',
    top: 120,
  },
})

export default AboutScreen;