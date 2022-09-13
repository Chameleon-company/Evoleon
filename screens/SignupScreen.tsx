import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Pressable, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';

import main from '../styles/authenticate';
import buttonStyles from '../styles/buttonStyle';
import inputStyle from '../styles/inputStyle';
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
 
      <View style={main.Centered}>
          <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)" >
            Already have an account?
          </Text> 

          {/* Link to go to sign in page*/}
          <Pressable
              onPress={() => {
                navigation.navigate("Login")
              }}>
            <Text style={buttonStyles.SigninLink}>Sign in</Text>
          </Pressable>

          {/* Collect user information */}
          <SafeAreaView style={inputStyle.InputArea}>
              <TextInput style={inputStyle.Text} onChangeText={onChangeTextFirstName} value={firstName} placeholder="First name"/>
              <TextInput style={inputStyle.Text} onChangeText={onChangeTextLastName} value={lastName} placeholder="Last name"/>
              <TextInput style={inputStyle.Text} onChangeText={onChangeTextCountry} value={homeCountry} placeholder="Home Country"/>
              <TextInput style={inputStyle.Text} onChangeText={onChangeTextPostcode} value={homePostcode} placeholder="Home Postcode"/>
              <TextInput style={inputStyle.Text} onChangeText={onChangeTextEmail} value={email} placeholder="Email"/>
              <TextInput style={inputStyle.Text} secureTextEntry={true} onChangeText={onChangeTextPassword} value={password} placeholder="Password"/>
          </SafeAreaView>

          <View style={inputStyle.CheckBox}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#294E4B' : undefined}
              />
              <Text style={inputStyle.CheckBoxText}>I agree to Terms and Conditions and the Privacy Policy</Text>
          </View> 


          {/* Submit button */}
          <Pressable style={buttonStyles.Button}
          onPress={() => {
            userSignUp(email, password);
            navigation.navigate("Database");
          }}>
            <Text style={buttonStyles.Text}>Submit</Text>
          </Pressable>

      </View>
    )

}