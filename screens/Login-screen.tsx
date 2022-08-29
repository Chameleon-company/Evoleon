import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import { Pressable } from "react-native";
import buttonStyles from "../styles/buttonStyle";
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
        <Pressable style={LoginStyle.buttonTextOnly}>
          <Text style={LoginStyle.SignupLink}>Sign Up</Text>
        </Pressable>
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

        <Pressable style={LoginStyle.forgotPassButton}>
          <Text style={LoginStyle.SignupLink}>Forgot your password?</Text>
        </Pressable>

        {/* Sign in button */}
        <Pressable
          style={LoginStyle.button}
          onPress={() => {
            console.log("Pressed sign up button");

            // Navigation link to be improved
            navigation.navigate("DatabaseScreen");
          }}
        >
          <Text style={buttonStyles.Text}>Sign In</Text>
        </Pressable>

        <Pressable style={LoginStyle.cancelButton}>
          <Text style={LoginStyle.cancelText}>Cancel</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
