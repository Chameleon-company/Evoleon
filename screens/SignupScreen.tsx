import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import { Text, View, useTheme } from '../components/Themed';

import Checkbox from 'expo-checkbox';
import { userSignUp } from '../web/firebase';

import { createAuthenticationStyle } from '../styles/authenticateStyle';
import { createButtonStyle } from '../styles/buttonStyle';

export default function SignupScreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  const AuthScreenStyle = createAuthenticationStyle(colorScheme);
  const SignupStyle = createSignupStyle(colorScheme);
  const ButtonStyle = createButtonStyle(colorScheme);

  const [firstName, onChangeTextFirstName] = React.useState('');
  const [lastName, onChangeTextLastName] = React.useState('');
  const [homeCountry, onChangeTextCountry] = React.useState('');
  const [homePostcode, onChangeTextPostcode] = React.useState('');
  const [email, onChangeTextEmail] = React.useState('');
  const [password, onChangeTextPassword] = React.useState('');
  const [confirmPassword, onChangeTextConfirmPassword] = React.useState('');
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View style={SignupStyle.content}>
      <Text style={SignupStyle.text}>Already have an account? </Text>

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
          placeholder="First name *"
        />
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextLastName}
          value={lastName}
          placeholderTextColor="grey"
          placeholder="Last name  *"
        />
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextCountry}
          value={homeCountry}
          placeholderTextColor="grey"
          placeholder="Home Country *"
        />
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextPostcode}
          value={homePostcode}
          placeholderTextColor="grey"
          placeholder="Home Postcode  *"
        />
        <TextInput
          style={SignupStyle.Text}
          onChangeText={onChangeTextEmail}
          value={email}
          placeholderTextColor="grey"
          placeholder="Email  *"
        />
        <TextInput
          style={SignupStyle.Text}
          secureTextEntry={true}
          onChangeText={onChangeTextPassword}
          value={password}
          placeholderTextColor="grey"
          placeholder="Password *"
        />

        <TextInput
          style={SignupStyle.Text}
          secureTextEntry={true}
          onChangeText={onChangeTextConfirmPassword}
          value={confirmPassword}
          placeholderTextColor="grey"
          placeholder="Confirm Password *"
        />
      </SafeAreaView>

      <View style={SignupStyle.CheckBox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colorScheme.colors.primary : undefined}
        />

        <Text style={SignupStyle.CheckBoxText}>
          I agree to{' '}
          <Text
            onPress={() => navigation.navigate('TermsAndConditionsScreen')}
            style={{ ...ButtonStyle.signupLink, color: colorScheme.colors.primary }}
          >
            Terms and Conditions
          </Text>{' '}
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
              throw new Error('Passwords do not match.');
            }

            // Check password length
            if (password.length < 6) {
              throw new Error('Password must be 6 characters or more.');
            }
            const result = await userSignUp(email, password, firstName, lastName, homeCountry, confirmPassword);

            if (result) {
              console.log('Account created successfully');
              navigation.navigate('Map');
            } else {
              console.log('Error when creating account');
              Alert.alert('Error when creating account');
            }
          } catch (error: any) {
            console.error('An error occurred during sign up:', error.message);
            Alert.alert('Error during sign up', error.message);
          }
        }}
      >
        <Text style={ButtonStyle.Text}>Submit</Text>
      </Pressable>

      <Pressable
        style={ButtonStyle.cancelButton}
        onPress={() => {
          navigation.navigate('Authenticate');
        }}
      >
        <Text style={ButtonStyle.cancelText}>Cancel</Text>
      </Pressable>
    </View>
  );
}
