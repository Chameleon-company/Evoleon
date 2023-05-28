// Importing required modules and components
import React, { useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { AuthScreenStyle } from "../styles/authenticateStyle";
import { ButtonStyle } from "../styles/buttonStyle";
import logoStyles from "../styles/logoStyle";

// Defining the AuthenticateScreen component
const AuthenticateScreen = () => {
  // Getting navigation object
  const navigation = useNavigation(); 

  // Set the left header component
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  }, [navigation]);

  // Render component
  return (
    <View style={AuthScreenStyle.Centered}>
      {/* Displaying logo */}
      <Image style={logoStyles.frontPageLogo} source={require("./EvoleonFinal.png")} />

      {/* Login button */}
      <TouchableOpacity
        style={ButtonStyle.Button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={ButtonStyle.Text}>Login</Text>
      </TouchableOpacity>

      {/* Sign up button */}
      <TouchableOpacity
        style={ButtonStyle.Button}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={ButtonStyle.Text}>Sign up</Text>
      </TouchableOpacity>

      {/* Back button */}
      <TouchableOpacity
        style={[{marginTop: 20}, ButtonStyle.Button]}
        onPress={() => navigation.goBack()}
      >
        <Text style={ButtonStyle.Text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthenticateScreen;
