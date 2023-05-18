// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { userPasswordResetAuth } from "../web/firebase";
import main from "../styles/main";
import { ButtonStyle } from "../styles/buttonStyle";
import { LoginScreenStyle } from "../styles/loginStyle";

// Main component for ForgotPasswordScreen
export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  
  // Setting options for navigation
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  }, []);

  // Handling password reset
  const handlePasswordReset = async () => {
    const { success, error } = await userPasswordResetAuth(email);
    if (!success) {
      if (error.code === "auth/invalid-email" || error.code === "auth/missing-email") {
        Alert.alert("Error", "Please enter the email");
      } else {
        Alert.alert("Incorrect account email", error.message);
      }
    } else {
      navigation.navigate("Authenticate");
    }
  };

  // Rendering the Forgot Password Screen
  return (
    <SafeAreaView style={LoginScreenStyle.content}>
      <View style={LoginScreenStyle.inputView}>
        <TextInput
          style={LoginScreenStyle.input}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="grey"
          placeholder="Email"
        />

        <TouchableOpacity
          style={ButtonStyle.Button}
          onPress={handlePasswordReset}
        >
          <Text style={ButtonStyle.Text}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={LoginScreenStyle.cancelButton}
          onPress={() => navigation.navigate("Database")}
        >
          <Text style={LoginScreenStyle.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
