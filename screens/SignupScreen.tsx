import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Alert, Pressable, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useEffect } from "react";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";

import { AuthScreenStyle } from "../styles/authenticateStyle";
import { ButtonStyle } from "../styles/buttonStyle";
import { SignUpScreenStyle } from "../styles/signUpStyle";
import Checkbox from "expo-checkbox";
import { getAuth, sendEmailVerification } from 'firebase/auth';
import { userSignUp } from "../web/firebase";

{
  /* User sign up screen */
}
export default function SignupScreen() {
  const navigation = useNavigation();
  const [firstName, onChangeTextFirstName] = React.useState("");
  const [lastName, onChangeTextLastName] = React.useState("");
  const [homeCountry, onChangeTextCountry] = React.useState("");
  const [homePostcode, onChangeTextPostcode] = React.useState("");
  const [email, onChangeTextEmail] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");
  const [confirmPassword, onChangeTextConfirmPassword] = React.useState("");
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View style={AuthScreenStyle.Centered}>
      <Text lightColor="rgba(0,0,0,0.8)" darkColor="#294E4B">
        Already have an account?
      </Text>

      {/* Link to go to Login page*/}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}>
        <Text style={ButtonStyle.LoginLink}>Login</Text>
      </TouchableOpacity>

      {/* Collect user information */}
      <SafeAreaView style={SignUpScreenStyle.InputArea}>
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextFirstName}
          value={firstName}
          placeholderTextColor="grey"
          placeholder="First name *"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextLastName}
          value={lastName}
          placeholderTextColor="grey"
          placeholder="Last name  *"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextCountry}
          value={homeCountry}
          placeholderTextColor="grey"
          placeholder="Home Country *"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextPostcode}
          value={homePostcode}
          placeholderTextColor="grey"
          placeholder="Home Postcode  *"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextEmail}
          value={email}
          placeholderTextColor="grey"
          placeholder="Email  *"
          placeholder="Email  *"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          secureTextEntry={true}
          onChangeText={onChangeTextPassword}
          value={password}
          placeholderTextColor="grey"
          placeholder="Password *"
        />
          />
        <TextInput
          style={SignUpScreenStyle.Text}
          secureTextEntry={true}
          onChangeText={onChangeTextConfirmPassword}
          value={confirmPassword}
          placeholderTextColor="grey"
          placeholder="Confirm Password *"
          placeholder="Password *"
        />
  
      </SafeAreaView>

      <View style={SignUpScreenStyle.CheckBox}>
        <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? "#294E4B" : undefined} />

        <TouchableOpacity
        ///style={SignUpScreenStyle.termsConditionsButton}
        /// onPress={() => {
        /// navigation.navigate('TermsAndConditionsScreen');
        ///  }}
        />
        <Text style={SignUpScreenStyle.CheckBoxText}>
          I agree to
          <TouchableOpacity onPress={() => navigation.navigate("TermsAndConditionsScreen")}>
            <Text style={SignUpScreenStyle.SignupLink}>Terms and Conditions</Text>
          </TouchableOpacity>
          and the Privacy Policy
        </Text>
      </View>
  {/* Submit Button */}
      <Pressable
        style={ButtonStyle.Button}
        onPress={async () => {
          try {
            // Check if passwords match
            if (password !== confirmPassword) {
              throw new Error("Passwords do not match.");
            }
      
             // Check password length
             if (password.length < 6) {
              throw new Error("Password must be 6 characters or more.");
            }
            const auth = getAuth();
      
            const result = await userSignUp(
              email,
              password,
              firstName,
              lastName,
              homeCountry,
              confirmPassword,
              auth
            );
      
            if (result) {
              console.log('Account created successfully');
              navigation.navigate('DatabaseScreen');
            } else {
              console.log('Error when creating account');
              Alert.alert('Error when creating account');
            }
      
      // Send email verification
            try {
              await sendEmailVerification(auth.currentUser);
              console.log("Verification email sent successfully");
            } catch (error) {
              console.error("Error sending verification email:", error);
            }
          } catch (error: any) {
            console.error('An error occurred during sign up:', error.message);
            Alert.alert('Error during sign up', error.message);
          }
        }}
      >
        <Text style={ButtonStyle.Text}>Submit</Text>
      </Pressable>
    </View>
  );
}