import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Alert, Pressable, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';

import { AuthScreenStyle } from '../styles/authenticateStyle';
import { ButtonStyle } from '../styles/buttonStyle';
import { SignUpScreenStyle } from '../styles/signUpStyle';
import Checkbox from 'expo-checkbox';
import { userSignUp } from '../web/firebase';

{
  /* User sign up screen */
}
export default function SignupScreen() {
  const navigation = useNavigation();
  const [firstName, onChangeTextFirstName] = React.useState('');
  const [lastName, onChangeTextLastName] = React.useState('');
  const [homeCountry, onChangeTextCountry] = React.useState('');
  const [homePostcode, onChangeTextPostcode] = React.useState('');
  const [email, onChangeTextEmail] = React.useState('');
  const [password, onChangeTextPassword] = React.useState('');
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View style={AuthScreenStyle.Centered}>
      <Text lightColor="rgba(0,0,0,0.8)" darkColor="#294E4B">
        Already have an account?
      </Text>

      {/* Link to go to Login page*/}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <Text style={ButtonStyle.LoginLink}>Login</Text>
      </TouchableOpacity>

      {/* Collect user information */}
      <SafeAreaView style={SignUpScreenStyle.InputArea}>
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextFirstName}
          value={firstName}
          placeholderTextColor="grey"
          placeholder="First name"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextLastName}
          value={lastName}
          placeholderTextColor="grey"
          placeholder="Last name"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextCountry}
          value={homeCountry}
          placeholderTextColor="grey"
          placeholder="Home Country"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextPostcode}
          value={homePostcode}
          placeholderTextColor="grey"
          placeholder="Home Postcode"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          onChangeText={onChangeTextEmail}
          value={email}
          placeholderTextColor="grey"
          placeholder="Email"
        />
        <TextInput
          style={SignUpScreenStyle.Text}
          secureTextEntry={true}
          onChangeText={onChangeTextPassword}
          value={password}
          placeholderTextColor="grey"
          placeholder="Password"
        />
      </SafeAreaView>

      <View style={SignUpScreenStyle.CheckBox}>
        <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? '#294E4B' : undefined} />

        <TouchableOpacity />
        <Text style={SignUpScreenStyle.CheckBoxText}>
          I agree to
          <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditionsScreen')}>
            <Text style={SignUpScreenStyle.SignupLink}>Terms and Conditions</Text>
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
