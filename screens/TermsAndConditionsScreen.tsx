import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import {
  Alert,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect } from "react";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";

import { AuthScreenStyle } from "../styles/authenticateStyle";
import { ButtonStyle } from "../styles/buttonStyle";
import { SignUpScreenStyle } from "../styles/signUpStyle";
//import { LoginScreenStyle } from "../styles/loginStyle";
import Checkbox from "expo-checkbox";
import { userSignUp } from "../web/firebase";

export default function TermsAndConditionsScreen() {
    const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  });
  
  return (
    <View>
    <SafeAreaView style={SignUpScreenStyle.content}>
      <View style={SignUpScreenStyle.inputView}>
        <Text>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
        make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that 
        it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like 
        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will 
        uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, 
        sometimes on purpose (injected humour and the like).
        </Text>


        <TouchableOpacity
          style={SignUpScreenStyle.button}
          onPress={() => {
            navigation.navigate("Signup");
          }}   
        >
          <Text style={ButtonStyle.Text}>Okay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
);
}
