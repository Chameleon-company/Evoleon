import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import { Pressable, TextInput } from "react-native";
import buttonStyles from "../styles/buttonStyle";
import MenuIcon from "../components/MenuIcon";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginStyle } from "../styles/login";
import { userSignIn } from "../web/firebase";

{
  /* Log in Screen */
}
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
    <SafeAreaView style={LoginStyle.content}>
      <View style={LoginStyle.upperContent}>
        <Text>Don't have an account?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Database");
          }}
        >
          <Text style={LoginStyle.SignupLink}>Sign Up</Text>
        </Pressable>
      </View>

      <View style={LoginStyle.inputView}>
        <TextInput
          style={LoginStyle.input}
          keyboardType="email-address"
          onChangeText={onChangeTextEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={LoginStyle.input}
          secureTextEntry={true}
          onChangeText={onChangeTextPassword}
          value={password}
          placeholder="Password"
        />

        <Pressable style={LoginStyle.forgotPassButton}>
          <Text style={LoginStyle.SignupLink}>Forgot your password?</Text>
        </Pressable>

        {/* Sign in button */}
        <Pressable
          style={LoginStyle.button}
          onPress={() => {
            userSignIn(email, password);
            navigation.navigate("Database");
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
