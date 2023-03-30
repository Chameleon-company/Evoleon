import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Image, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { useEffect, useState } from "react";
import main from "../styles/main";
import {
  getSignInSignOutButtonText,
  getuserIsAuthenticated,
  getUserNameTextForProfilePage,
  signInSignOutButtonPressed,
} from "../web/firebase";
import { ClientStyle } from "../styles/clientStyle";

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [profileText, setProfileText] = useState("This is a password test");
  const [signInSignOutText, setSignInSignOutText] = useState("Sign in");

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
    navigation.addListener("focus", () => {
      setProfileText(getUserNameTextForProfilePage());
      setSignInSignOutText(getSignInSignOutButtonText());
    });
  });
}
