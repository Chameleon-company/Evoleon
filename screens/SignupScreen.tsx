import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Alert, Pressable, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';

import { Text, View, getTheme } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';

import Checkbox from 'expo-checkbox';
import { userSignUp } from '../web/firebase';

import { createAuthScreenStyle } from '../styles/authenticateStyle';
import { createButtonStyle } from '../styles/buttonStyle';
import { createSignupStyle } from '../styles/signUpStyle';

export default function SignupScreen() {
  const navigation = useNavigation();
  const colorScheme = getTheme();

  const AuthScreenStyle = createAuthScreenStyle(colorScheme);
  const SignupStyle = createSignupStyle(colorScheme);
  const ButtonStyle = createButtonStyle(colorScheme);

  const [firstName, onChangeTextFirstName] = React.useState('');
  const [lastName, onChangeTextLastName] = React.useState('');
  const [homeCountry, onChangeTextCountry] = React.useState('');
  const [homePostcode, onChangeTextPostcode] = React.useState('');
  const [email, onChangeTextEmail] = React.useState('');
  const [password, onChangeTextPassword] = React.useState('');
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View style={AuthScreenStyle.Centered}>
      <Text>Already have an account?</Text>

      {/* Link to go to Login page*/}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <Text style={ButtonStyle.LoginLink}>Login</Text>
      </TouchableOpacity>

      {/* Collect user information */}
      <SafeAreaView style={SignupStyle.InputArea}>
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextFirstName}
          value={firstName}
          placeholderTextColor="grey"
          placeholder="First name"
        />
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextLastName}
          value={lastName}
          placeholderTextColor="grey"
          placeholder="Last name"
        />
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextCountry}
          value={homeCountry}
          placeholderTextColor="grey"
          placeholder="Home Country"
        />
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextPostcode}
          value={homePostcode}
          placeholderTextColor="grey"
          placeholder="Home Postcode"
        />
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextEmail}
          value={email}
          placeholderTextColor="grey"
          placeholder="Email"
        />
        <TextInput
          style={SignupStyle.Text}
          secureTextEntry={true}
          onChangeText={onChangeTextPassword}
          value={password}
          placeholderTextColor="grey"
          placeholder="Password"
        />
      </SafeAreaView>

      <View style={SignupStyle.CheckBox}>
        <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? '#294E4B' : undefined} />

        <TouchableOpacity />
        <Text style={SignupStyle.CheckBoxText}>
          I agree to
          <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditionsScreen')}>
            <Text style={SignupStyle.SignupLink}>Terms and Conditions</Text>
          </TouchableOpacity>
          and the Privacy Policy
        </Text>
      </View>

      {/* Submit button */}
      <Pressable
        style={ButtonStyle.Button}
        onPress={() => {
          userSignUp(email, password, firstName, lastName, homeCountry).then((result) => {
            console.log(result);
            if (result == true) {
              navigation.navigate('Database');
            } else {
              Alert.alert('Error when creating account');
            }
          });
        }}
      >
        <Text style={ButtonStyle.Text}>Submit</Text>
      </Pressable>
    </View>
  );
}
