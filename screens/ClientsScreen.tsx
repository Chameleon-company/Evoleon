//import necessary libraries and components
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Image, TouchableOpacity, ScrollView} from "react-native";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { useEffect, useState } from "react";
import main from "../styles/main";
import {
  getLoginSignOutButtonText,
  getuserIsAuthenticated,
  getUserNameTextForProfilePage,
  LoginSignOutButtonPressed,
} from "../web/firebase";
import { ClientStyle } from "../styles/clientStyle";

export default function ClientsScreen() {
  // Define navigation using the useNavigation hook.
  const navigation = useNavigation();

  const [LoginSignOutText, setLoginSignOutText] = useState("Sign in");

  const [isVisible, setIsVisible] = useState(true);

  
  // Define state variables to hold profile and sign in/out text.
  const [profileText, setProfileText] = useState(
    "Please log into your account"
  );



  // Set the headerLeft icon to the menu icon.
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
      // Set profile and sign in/out text when screen is focused.
      navigation.addListener("focus", () => {
      setProfileText(getUserNameTextForProfilePage());
      setLoginSignOutText(getLoginSignOutButtonText());
    });

    if(getuserIsAuthenticated()) {
      setIsVisible(true); 
    } else {
      setIsVisible(false); 
    }
    
    
  });

  // Define function for login sign out button pressed.
  const authActions = () => {
    if (getuserIsAuthenticated()) {
      LoginSignOutButtonPressed();
      setProfileText("Please login to view account");
      setLoginSignOutText("Login");
      setIsVisible(false);

    } else {
      navigation.navigate("Login");
    }

  };

  return (
    /* Render the main content of the screen using a View component. 
    This content is rendered in a scroll view, which allows for a dynamic menu that can be moved up and down.
    */
    <ScrollView style={ClientStyle.scrollView}>
    <View style={ClientStyle.content}>
      <View style={ClientStyle.topPageContent}>
        {/* Display Evoleon logo image */}
        <Image
          style={ClientStyle.profileImage}
          source={require("../assets/EvoleonFinal.png")}
        />
        {/* Display the profile text using a Text component */}
        <Text style={ClientStyle.headingText}>{profileText}</Text>
      </View>
      
      {/* Render the profile actions using TouchableOpacity and Image components */}
      <View style={ClientStyle.profileActionsView}>
        <TouchableOpacity style={ClientStyle.profileActionsCell}>
          <Text style={ClientStyle.profileActionsText}>Edit Information</Text>
          <Image
            source={require("../assets/Arrow.png")}
            style={ClientStyle.arrow}
          />
        </TouchableOpacity>

        <TouchableOpacity style={ClientStyle.profileActionsCell}>
          <Text style={ClientStyle.profileActionsText}>Dark Mode Enabled</Text>
          <Image
            source={require("../assets/LightMode.png")}
            style={ClientStyle.lightModeIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={ClientStyle.profileActionsCell}>
          <Text style={ClientStyle.profileActionsText}>About</Text>
          <Image
            source={require("../assets/Arrow.png")}
            style={ClientStyle.arrow}
          />
        </TouchableOpacity>

        <TouchableOpacity style={ClientStyle.profileActionsCell}>
          <Text style={ClientStyle.profileActionsText}>Help and Support</Text>
          <Image
            source={require("../assets/Arrow.png")}
            style={ClientStyle.arrow}
          />
        </TouchableOpacity>
      
      {/* This hides the delete button when the status chnages. */}
      {isVisible && (
        <TouchableOpacity style={ClientStyle.profileActionsCell}>
          <Text style={ClientStyle.profileActionsText}>Delete Account</Text>
          <Image
            source={require("../assets/Arrow.png")}
            style={ClientStyle.arrow}
          />
        </TouchableOpacity>
      )}
        
        {/* Display the login or sign out button with its text and icon */}
        <TouchableOpacity
          style={ClientStyle.profileActionsCell}
          onPress={() => {
            authActions();
          }}
        >
          <Text style={ClientStyle.profileActionsText}>
            {LoginSignOutText}
          </Text>
          <Image
            source={require("../assets/LogOut.png")}
            style={ClientStyle.logOutIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}
