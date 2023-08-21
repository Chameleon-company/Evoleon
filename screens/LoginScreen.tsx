import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import { Alert, Pressable, TextInput, TouchableOpacity } from "react-native";
import { ButtonStyle } from "../styles/buttonStyle";
import MenuIcon from "../components/MenuIcon";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginScreenStyle } from "../styles/loginStyle";
import { userLogin } from "../web/firebase";

// Colour imports
import {Color} from "../constants/Colors"

{ /* Log in Screen */ }
export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, onChangeTextEmail] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  });

  return (
    <SafeAreaView style={LoginScreenStyle.content}>
      <View style={LoginScreenStyle.content}>
        <Text lightColor="Color.light.Text" darkColor="Colour.dark.Text">
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
        >
          <Text style={ButtonStyle.SignupLink} lightColor="Color.light.Color" darkColor="Color.dark.Color">
            Sign Up
          </Text>
        </TouchableOpacity>

        <View style={LoginScreenStyle.inputView}>
          <TextInput
            style={LoginScreenStyle.input}
            keyboardType="email-address"
            onChangeText={onChangeTextEmail}
            value={email}
            placeholderTextColor="grey"
            placeholder="Email"
          />
          <TextInput
            style={LoginScreenStyle.input}
            secureTextEntry={true}
            onChangeText={onChangeTextPassword}
            value={password}
            placeholderTextColor="grey"
            placeholder="Password"
          />

          {/* Forgot password button */}
          <TouchableOpacity
            style={ButtonStyle.forgotPassButton}
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
          >
            <Text style={ButtonStyle.forgotPassButton} lightColor="Color.light.Color" darkColor="Color.dark.Color">
              Forgot your password?{' '}
            </Text>
          </TouchableOpacity>

          {/* Login button */}
          <TouchableOpacity
            style={ButtonStyle.button}
            onPress={async () => {
              const { success, error } = await userLogin(email, password);
              if (success) {
                navigation.navigate('Database');
              } else {
                Alert.alert('Login Error', error.code === 'auth/wrong-password' ? 'Incorrect password' : error.message);
              }
            }}
          >
            <Text style={ButtonStyle.Text} lightColor="Color.light.Text" darkColor="Color.dark.Text">
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ButtonStyle.cancelButton}
            lightColor="Color.light.color"
            darkColor="Color.dark.color"
            onPress={() => {
              navigation.navigate('Authenticate');
            }}
          >
            <Text style={ButtonStyle.cancelText} lightColor="Color.light.Text" darkColor="Color.dark.Text">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
