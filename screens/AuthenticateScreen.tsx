import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Image, Pressable, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';

import { Text, View, getTheme } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';

import { createAuthScreenStyle } from '../styles/authenticateStyle';
import { createButtonStyle } from '../styles/buttonStyle';

/* Initial screen for authentication proccess.
  To do: improve user interface code and update links
*/

export default function AuthenticateScreen() {
  const navigation = useNavigation();
  const colorScheme = getTheme();

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
      {/* Back button */}
      <TouchableOpacity
        style={[{ marginTop: 20 }, ButtonStyle.Button]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={ButtonStyle.Text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
