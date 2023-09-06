import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

import { Text, View, useTheme } from '../components/Themed';

import { createAuthenticationStyle } from '../styles/authenticateStyle';
import { createButtonStyle } from '../styles/buttonStyle';

/* Initial screen for authentication proccess.
  To do: improve user interface code and update links
*/

export default function AuthenticateScreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  const AuthenticationStyle = createAuthenticationStyle(colorScheme);
  const ButtonStyle = createButtonStyle(colorScheme);

  return (
    <View style={AuthenticationStyle.Centered}>
      {/* Logo - to be updated with current logo */}
      <Image style={AuthenticationStyle.frontPageLogo} source={require('../assets/EvoleonUserProfileTemp.png')} />

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
