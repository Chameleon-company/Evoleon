import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { Button, TextInput } from "react-native-paper";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginStyle } from "../styles/login";

export default function LoginScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  });

  return (
    <SafeAreaView style={LoginStyle.content}>
      <View style={LoginStyle.upperContent}>
        <Text>Don't have an account?</Text>
        <Button textColor="rgb(41,78,75)" uppercase={false}>
          Sign Up
        </Button>
      </View>
      <View style={LoginStyle.inputView}>
        <TextInput
          style={LoginStyle.input}
          label="Email Address"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={LoginStyle.input}
          label="Password"
          secureTextEntry={true}
        ></TextInput>
        <Button
          textColor="rgb(41,78,75)"
          style={LoginStyle.button}
          uppercase={false}
        >
          Forgot your password?
        </Button>
        <Button
          style={LoginStyle.button}
          buttonColor="rgb(41,78,75)"
          mode="contained"
          labelStyle={{ fontSize: 20 }}
        >
          Sign In
        </Button>
        <Button
          textColor="rgb(41,78,75)"
          style={LoginStyle.cancelButton}
          uppercase={false}
        >
          Cancel
        </Button>
      </View>
    </SafeAreaView>
  );
}
