import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Image, Pressable} from 'react-native';
import { useEffect } from 'react';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';

import main from '../styles/authenticate';
import buttonStyles from '../styles/buttonStyle';
import logoStyles from '../styles/logoStyle';


{/* Initial screen for authentication proccess.
    To do: improve user interface code and update links
  */}
export default function AuthenticateScreen() {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
          headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
        });
      });

      return (
          <View style={main.Centered}>

            {/* Logo - to be updated with current logo */}
            <Image style={logoStyles.Logo} source={require('./EvoleonFinal.png')} />

            {/* Sign in button */}
            <Pressable style={buttonStyles.Button}
            onPress={() => {     
                navigation.navigate("Login");
            }}>
              <Text style={buttonStyles.Text}>Sign in</Text>
            </Pressable>

            {/* Sign up button */}
            <Pressable style={buttonStyles.Button} 
              onPress={() => {
                navigation.navigate("Signup")
              }}>
              <Text style={buttonStyles.Text}>Sign up</Text>
            </Pressable>
       
          </View>
        
      )

}