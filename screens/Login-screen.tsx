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

/* Firebase code - TO DO: improve and move to a seperate file */
import { signInWithEmailAndPassword, Auth, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const userSignIn = (auth: Auth, email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in with:", user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, onChangeTextEmail] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");

  /* Firebase code - TO DO: improve and move to a seperate file */
  const firebaseConfig = {
    apiKey: "AIzaSyB2KIY6cDnp1UPZXCc66wqH8d6uZV5-Eck",
    authDomain: "evoleonapp-c3959.firebaseapp.com",
    projectId: "evoleonapp-c3959",
    storageBucket: "evoleonapp-c3959.appspot.com",
    messagingSenderId: "956409458991",
    appId: "1:956409458991:web:8c4cebedcc21a476a831da",
    measurementId: "G-CXFWZ7G1LE",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

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
            console.log("Pressed sign up button");
            userSignIn(auth, email, password);
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
