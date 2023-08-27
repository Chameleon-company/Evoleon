import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

import { Text, View, useTheme } from '../components/Themed';

import { createAuthScreenStyle } from '../styles/authenticateStyle';
import { createButtonStyle } from '../styles/buttonStyle';

/* Initial screen for authentication proccess.
  To do: improve user interface code and update links
*/

export default function AuthenticateScreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  const AuthScreenStyle = createAuthScreenStyle(colorScheme);
  const ButtonStyle = createButtonStyle(colorScheme);

  return (
    <View style={AuthScreenStyle.Centered}>
      {/* Logo - to be updated with current logo */}
      <Image style={AuthScreenStyle.frontPageLogo} source={require('./EvoleonFinal.png')} />

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
