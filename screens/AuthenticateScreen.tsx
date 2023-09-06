// React Native imports.
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

// Themed component imports.
import { Text, View, useTheme } from '../components/Themed';

// Style imports.
import { createButtonStyle } from '../styles/buttonStyle';
import { createElementPostionStyle } from '../styles/elementPositionStyle';

export default function AuthenticateScreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  const ButtonStyle = createButtonStyle(colorScheme);
  const ElementPostionStyle = createElementPostionStyle(colorScheme);

  return (
    <View style={ElementPostionStyle.centered}>
      {/* Logo - to be updated with current logo */}
      <Image style={ElementPostionStyle.landingPageLogo} source={require('../assets/EvoleonUserProfileTemp.png')} />

      {/* Login button */}
      <TouchableOpacity
        style={ButtonStyle.Button}
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <Text style={ButtonStyle.Text}>Login</Text>
      </TouchableOpacity>

      {/* Sign up button */}
      <TouchableOpacity
        style={ButtonStyle.Button}
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        <Text style={ButtonStyle.Text}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
