import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, ScrollView, Alert, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import {
  getUserAuthStatus,
  getUserNameTextForProfilePage,
  userDeleteAccount,
  logoutUser,
} from "../web/firebase";
import { SettingsStyle } from "../styles/settingsStyle";

interface SettingsOption {
  text: string;
  iconName: string;
  action: () => void;
}

interface IconName {
    name: "user" | "bell" | "accessibility" | "help" | "info" | "text-document" | "log-out" | "remove-user" | /* add other allowed icon names here */;
  }

const ListButton: React.FC<SettingsOption> = ({ action, text, iconName }) => {
  return (
    <TouchableOpacity
      style={SettingsStyle.profileActionsCell}
      onPress={action}
    >
      <Text style={SettingsStyle.profileActionsText}>{text}</Text>
      <Entypo
        name={iconName as IconName['name']}
        size={24}
        color="#294E4B"
        style={SettingsStyle.buttonIcon}
      />
    </TouchableOpacity>
  );
};

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const HeadProfileText = "Settings";

  const [profileText, setProfileText] = useState(HeadProfileText);

  const [LoginSignOutText, setLoginSignOutText] = useState("Login");

  const settingsOptions: SettingsOption[] = [
    {
      text: "Profile",
      iconName: "user",
      action: () => {
        // Navigate to Profile page
        navigation.navigate("Update Details");
      },
    },
    {
      text: "Notifications",
      iconName: "bell",
      action: () => {
        // Navigate to Notifications page
        navigation.navigate("Notifications");
      },
    },
    {
      text: "Accessibility",
      iconName: "accessibility",
      action: () => {
        // Navigate to Accessibility page
        navigation.navigate("Accessibility");
      },
    },
    {
      text: "Help and Support",
      iconName: "help",
      action: () => {
        // Navigate to Help and Support page
        navigation.navigate("HelpAndSupport");
      },
    },
    {
      text: "About",
      iconName: "info",
      action: () => {
        // Navigate to About page
        navigation.navigate("About");
      },
    },
    {
      text: "Terms and Conditions",
      iconName: "text-document",
      action: () => {
        // Navigate to Terms and Conditions page
        navigation.navigate("TermsAndConditions");
      },
    },
    {
      text: "Log Out",
      iconName: "log-out",
      action: () => {
        logoutUser();
        // Navigate to Terms and Conditions page
        navigation.navigate("Authenticate");
      },  
    },
    {
      text: "Delete Account",
      iconName: "remove-user",
      action: () => {
        // Show deletion alert
        Alert.alert(
          "Deletion request.",
          "Are you sure you want to delete your account?",
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel",
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
                      onPress: () => {},
                      style: "cancel",
                    },
                    {
                      text: "Understood",
                      onPress: async () => {
                        await userDeleteAccount();
                        setLoginSignOutText(getUserAuthStatus().Text);
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
      },
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });

    navigation.addListener("focus", () => {
      setProfileText(getUserNameTextForProfilePage());
      setLoginSignOutText(getUserAuthStatus().Text);
    });
  }, [navigation]);

  return (
    <View style={SettingsStyle.content}>
      <View style={SettingsStyle.profileContainer}>
        <Image
          style={SettingsStyle.profileImage}
          source={require("../assets/ProfileImage.png")}
        />
        <Text style={SettingsStyle.headingText}>{profileText}</Text>
      </View>
      <ScrollView style={SettingsStyle.scrollView}>
        {settingsOptions.map((option) => (
          <ListButton
            key={option.text}
            action={option.action}
            text={option.text}
            iconName={option.iconName}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
