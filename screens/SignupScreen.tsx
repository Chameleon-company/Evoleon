import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Pressable, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';

import {AuthScreenStyle} from '../styles/authenticateStyle';
import {ButtonStyle} from '../styles/buttonStyle';
import {SignUpScreenStyle} from '../styles/signUpStyle';
import Checkbox from 'expo-checkbox';
import {userSignUp} from '../web/firebase'


{/* User sign up screen */}
export default function SignupScreen() {
    const navigation = useNavigation();
    const [firstName, onChangeTextFirstName] = React.useState('');
    const [lastName, onChangeTextLastName] = React.useState('');
    const [homeCountry, onChangeTextCountry] = React.useState('');
    const [homePostcode, onChangeTextPostcode] = React.useState('');
    const [email, onChangeTextEmail] = React.useState('');
    const [password, onChangeTextPassword] = React.useState('');
    const [isChecked, setChecked] = React.useState(false);

    
    useEffect(() => {
        navigation.setOptions({
          headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
        });
      });

      

    return (
 
      <View style={AuthScreenStyle.Centered}>
          <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)" >
            Already have an account?
          </Text> 

          {/* Link to go to sign in page*/}
          <Pressable
              onPress={() => {
                navigation.navigate("Login")
              }}>
            <Text style={ButtonStyle.SigninLink}>Sign in</Text>
          </Pressable>

          {/* Collect user information */}
          <SafeAreaView style={SignUpScreenStyle.InputArea}>
              <TextInput style={SignUpScreenStyle.Text} onChangeText={onChangeTextFirstName} value={firstName} placeholder="First name"/>
              <TextInput style={SignUpScreenStyle.Text} onChangeText={onChangeTextLastName} value={lastName} placeholder="Last name"/>
              <TextInput style={SignUpScreenStyle.Text} onChangeText={onChangeTextCountry} value={homeCountry} placeholder="Home Country"/>
              <TextInput style={SignUpScreenStyle.Text} onChangeText={onChangeTextPostcode} value={homePostcode} placeholder="Home Postcode"/>
              <TextInput style={SignUpScreenStyle.Text} onChangeText={onChangeTextEmail} value={email} placeholder="Email"/>
              <TextInput style={SignUpScreenStyle.Text} secureTextEntry={true} onChangeText={onChangeTextPassword} value={password} placeholder="Password"/>
          </SafeAreaView>

          <View style={SignUpScreenStyle.CheckBox}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#294E4B' : undefined}
              />
              <Text style={SignUpScreenStyle.CheckBoxText}>I agree to Terms and Conditions and the Privacy Policy</Text>
          </View> 


          {/* Submit button */}
          <Pressable style={ButtonStyle.Button}
          onPress={() => {
            userSignUp(email, password);
            navigation.navigate("Database");
          }}>
            <Text style={ButtonStyle.Text}>Submit</Text>
          </Pressable>

      </View>
    )

}