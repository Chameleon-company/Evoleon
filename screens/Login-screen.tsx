import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import { Pressable, TextInput } from "react-native";
import {ButtonStyle} from "../styles/buttonStyle";
import MenuIcon from "../components/MenuIcon";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginScreenStyle } from "../styles/loginStyle";
import {userSignIn} from '../web/firebase'


{/* Log in Screen */}
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
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => {
            navigation.navigate("Signup")
          }}>
          <Text style={LoginScreenStyle.SignupLink}>Sign Up</Text>
        </Pressable>


      <View style={LoginScreenStyle.inputView}>
        <TextInput style={LoginScreenStyle.input} keyboardType="email-address" onChangeText={onChangeTextEmail} value={email} placeholder="Email"/>
        <TextInput style={LoginScreenStyle.input} secureTextEntry={true} onChangeText={onChangeTextPassword} value={password} placeholder="Password"/>

        <Pressable style={LoginScreenStyle.forgotPassButton}>
          <Text style={LoginScreenStyle.SignupLink}>Forgot your password?</Text>
        </Pressable>

        {/* Sign in button */}
        <Pressable
          style={LoginScreenStyle.button}
            onPress={() => {
              userSignIn(email, password);
              navigation.navigate("Database")
          }}>
          <Text style={ButtonStyle.Text}>Sign In</Text>
        </Pressable>

        <Pressable style={LoginScreenStyle.cancelButton}
          onPress={() => {
            navigation.navigate("Database")
          }}>
          <Text style={LoginScreenStyle.cancelText}>Cancel</Text>
        </Pressable>
      </View>
      </View>
    </SafeAreaView>
  );
}
