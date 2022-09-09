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


/* Firebase code - TO DO: improve and move to a seperate file */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";

function userSignUp( auth: Auth, email: string, password: string){
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Created new account for:', user.email)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}


{/* Sign up Screen
    To do: improve user interface code, intergrate with database, and update page links
  */}

export default function SignupScreen() {
    const navigation = useNavigation();
    const [firstName, onChangeTextFirstName] = React.useState('');
    const [lastName, onChangeTextLastName] = React.useState('');
    const [homeCountry, onChangeTextCountry] = React.useState('');
    const [homePostcode, onChangeTextPostcode] = React.useState('');
    const [email, onChangeTextEmail] = React.useState('');
    const [password, onChangeTextPassword] = React.useState('');
    const [isChecked, setChecked] = React.useState(false);


    /* Firebase code - TO DO: improve and move to a seperate file */
    const firebaseConfig = {
      apiKey: "AIzaSyDKfzJfKg08xUAHb7WBhs-I2L8lQV5nUIg",
      authDomain: "evoleonapp.firebaseapp.com",
      projectId: "evoleonapp",
      storageBucket: "evoleonapp.appspot.com",
      messagingSenderId: "425564389277",
      appId: "1:425564389277:web:c86772f8abb19ffca47974",
      measurementId: "G-GL6LC3D645"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();


    
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
                console.log("Navigate to sign in page button pressed")
                navigation.navigate("SignupScreen")
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
          onPress={() => 
            userSignUp(auth, email, password)
          }>
            <Text style={buttonStyles.Text}>Submit</Text>
          </Pressable>

      </View>
    )

}