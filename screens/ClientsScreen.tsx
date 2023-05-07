import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Image, TouchableOpacity, ScrollView, Alert } from "react-native";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { useEffect, useState } from "react";
import main from "../styles/main";
import {
  getUserAuthStatus,
  getuserIsAuthenticated,
  getUserNameTextForProfilePage,
  LoginSignOutButtonPressed,
  userDeleteAccount,
} from "../web/firebase";
import { ClientStyle } from "../styles/clientStyle";

export default function ClientsScreen() {
  // Define navigation using the useNavigation hook.
  const navigation = useNavigation();

  const UnauthProfileText = "Please login to view account.";

  // Define state variables to hold profile and login sign out text.
  const [profileText, setProfileText] = useState(UnauthProfileText);

  const [LoginSignOutText, setLoginSignOutText] = useState("Login");

  const [buttonVisibleUserAuth, setButtonVisibleUserAuth] = useState(false);

  // Set the headerLeft icon to the menu icon.
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
    // Set profile and login or sign out text when screen is focused.
    navigation.addListener("focus", () => {
      setProfileText(getUserNameTextForProfilePage());

      setLoginSignOutText(getUserAuthStatus().Text);
    });
  });

  // Define function for login and sign out button pressed.
  const authActions = () => {
    if (getuserIsAuthenticated()) {
      LoginSignOutButtonPressed();
      setProfileText(UnauthProfileText);
      setLoginSignOutText("Login");

      /*  After the user is sign out, this will navigate them to the authentication screen,
      in order to update the client screen. 
      */
      navigation.navigate("Authenticate");
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
            source={require("../assets/EvoleonProfileTemp.png")}
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
              style={ClientStyle.buttonIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={ClientStyle.profileActionsCell}>
            <Text style={ClientStyle.profileActionsText}>
              Dark Mode Enabled
            </Text>
            <Image
              source={require("../assets/LightMode.png")}
              style={ClientStyle.buttonIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={ClientStyle.profileActionsCell}>
            <Text style={ClientStyle.profileActionsText}>About</Text>
            <Image
              source={require("../assets/Arrow.png")}
              style={ClientStyle.buttonIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={ClientStyle.profileActionsCell}>
            <Text style={ClientStyle.profileActionsText}>Help and Support</Text>
            <Image
              source={require("../assets/Arrow.png")}
              style={ClientStyle.buttonIcon}
            />
          </TouchableOpacity>

          {/* This hides the delete button when the status changes. */}
          {getUserAuthStatus().Status && (
            <TouchableOpacity
              style={ClientStyle.profileActionsCell}
              onPress={() => {
                Alert.alert(
                  "Deletion request.",
                  "Are you sure you want to delete your account?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => navigation.navigate("Clients"),
                    },
                    {
                      text: "Agree",
                      onPress: async () => {
                        Alert.alert(
                          "This action cannot be undone.",
                          "All user data will be removed from the application after this request.",
                          [
                            {
                              text: "Cancel",
                              onPress: () => navigation.navigate("Clients"),
                            },
                            {
                              text: "Understood",
                              onPress: async () => {
                                await userDeleteAccount();
                                setLoginSignOutText(getUserAuthStatus().Text);
                                setProfileText(UnauthProfileText);
                              },
                            },
                          ],
                          { cancelable: false }
                        );
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <Text style={ClientStyle.profileActionsText}>Delete Account</Text>
              <Image
                source={require("../assets/Delete.png")}
                style={ClientStyle.buttonIcon}
              />
            </TouchableOpacity>
          )}

          {/* Display the login or sign out button with its text and icon. */}
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
              style={ClientStyle.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
