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

{
  /* Log in Screen */
}
export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, onChangeTextEmail] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");

  return (
    <SafeAreaView style={LoginScreenStyle.content}>
      <View style={LoginScreenStyle.content}>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="#294E4B">
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}>
          <Text style={LoginScreenStyle.SignupLink}>Sign Up</Text>
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

          <TouchableOpacity
            style={LoginScreenStyle.forgotPassButton}
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}>
            <Text style={LoginScreenStyle.SignupLink}>Forgot your password?</Text>
          </TouchableOpacity>

          {/* Login button */}
          <TouchableOpacity
            style={LoginScreenStyle.button}
            onPress={async () => {
              const { success, error } = await userLogin(email, password);
              if (success) {
                navigation.navigate("Database");
              } else {
                Alert.alert("Login Error", error.code === "auth/wrong-password" ? "Incorrect password" : error.message);
              }
            }}>
            <Text style={ButtonStyle.Text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={LoginScreenStyle.cancelButton}
            onPress={() => {
              navigation.navigate("Authenticate");
            }}>
            <Text style={LoginScreenStyle.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
