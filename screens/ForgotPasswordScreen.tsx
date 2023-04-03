import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { useEffect, useState } from "react";
import main from "../styles/main";
import { Alert, Pressable, TextInput, TouchableOpacity } from "react-native";
import { ButtonStyle } from "../styles/buttonStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginScreenStyle } from "../styles/loginStyle";
import { userLogin } from "../web/firebase";

import { ClientStyle } from "../styles/clientStyle";

import {
  getLoginSignOutButtonText,
  getuserIsAuthenticated,
  getUserNameTextForProfilePage,
  LoginSignOutButtonPressed,
} from "../web/firebase";

export default function ForgotPasswordScreen() {
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
        <View style={LoginScreenStyle.inputView}>
          <TextInput
            style={LoginScreenStyle.input}
            keyboardType="email-address"
            onChangeText={onChangeTextEmail}
            value={email}
            placeholderTextColor="grey"
            placeholder="Email"
          />


          {/* Login button */}
          <TouchableOpacity
            style={LoginScreenStyle.button}
            onPress={async () => {
              await userLogin(email, password).then((result) => {
                if (result == true) {
                  navigation.navigate("Database");
                } else {
                  Alert.alert("Incorrect email or password");
                }
              });
            }}
          >
            <Text style={ButtonStyle.Text}>Login</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

