// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { userLogin } from "../web/firebase";

import { ButtonStyle } from "../styles/buttonStyle";
import { LoginScreenStyle } from "../styles/loginStyle";

{
  /* Log in Screen */
}

// Login Screen Component
export default function LoginScreen() {
  const navigation = useNavigation();
  
  // States to hold the user email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Set navigation options on component mount
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  }, [navigation]);

  // Login handler function
  const handleLogin = async () => {
    const { success, error } = await userLogin(email, password);

    if (success) {
      navigation.navigate("Database");
    } else {
      Alert.alert(
        "Login Error",
        error.code === "auth/wrong-password"
          ? "Incorrect password"
          : error.message
      );
    }
  };

  // Render LoginScreen Component
  return (
    <SafeAreaView style={LoginScreenStyle.content}>
      <View style={LoginScreenStyle.content}>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="#294E4B">
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={LoginScreenStyle.SignupLink}>Sign Up</Text>
        </TouchableOpacity>

        <View style={LoginScreenStyle.inputView}>
          <TextInput
            style={LoginScreenStyle.input}
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            placeholderTextColor="grey"
            placeholder="Email"
          />
          <TextInput
            style={LoginScreenStyle.input}
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="grey"
            placeholder="Password"
          />

          <TouchableOpacity
            style={LoginScreenStyle.forgotPassButton}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={LoginScreenStyle.SignupLink}>
              Forgot your password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={LoginScreenStyle.button}
            onPress={handleLogin}
          >
            <Text style={ButtonStyle.Text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={LoginScreenStyle.cancelButton}
            onPress={() => navigation.navigate("Authenticate")}
          >
            <Text style={LoginScreenStyle.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
