import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Image, TouchableOpacity } from "react-native";

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
  const navigation = useNavigation();

  const [profileText, setProfileText] = useState(
    "Please log into your account"
  );
  const [LoginSignOutText, setLoginSignOutText] = useState("Sign in");

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
    navigation.addListener("focus", () => {
      setProfileText(getUserNameTextForProfilePage());
      setLoginSignOutText(getLoginSignOutButtonText());
    });
  });

  const authActions = () => {
    if (getuserIsAuthenticated()) {
      LoginSignOutButtonPressed();
      setProfileText("Please login to view account");
      setLoginSignOutText("Sign in");
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={ClientStyle.content}>
      <View style={ClientStyle.topPageContent}>
        <Image
          style={ClientStyle.profileImage}
          source={require("../assets/EvoleonFinal.png")}
        />
        <Text style={ClientStyle.headingText}>{profileText}</Text>
      </View>

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
  );
}
