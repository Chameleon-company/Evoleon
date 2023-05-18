// Importing required modules and components
import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import {
  getUserAuthStatus,
  getUserNameTextForProfilePage,
  logoutUser,
  userDeleteAccount
} from '../web/firebase';
import { ClientStyle } from '../styles/clientStyle';

// ListButton component
const ListButton = ({ action, text, iconName }) => {
  return (
    <TouchableOpacity style={ClientStyle.profileActionsCell} onPress={action}>
      <Text style={ClientStyle.profileActionsText}>{text}</Text>
      <Entypo name={iconName} size={24} color="#294E4B" style={ClientStyle.buttonIcon} />
    </TouchableOpacity>
  );
};

// ClientsScreen component
const ClientsScreen = () => {
  // Define navigation and state variables
  const navigation = useNavigation();
  const [profileText, setProfileText] = useState('Please login to view account.');
  const [LoginSignOutText, setLoginSignOutText] = useState('Login');

  // Effect hook to set the header icon and profile/login text
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });

    const unsubscribe = navigation.addListener('focus', () => {
      setProfileText(getUserNameTextForProfilePage());
      setLoginSignOutText(getUserAuthStatus().Text);
    });

    // Clean up the event listener on unmount
    return unsubscribe;
  }, [navigation]);

  // Render component
  return (
    <View style={ClientStyle.content}>
      <View style={ClientStyle.profileContainer}>
        <Image style={ClientStyle.profileImage} source={require('../assets/EvoleonProfileTemp.png')} />
        <Text style={ClientStyle.headingText}>{profileText}</Text>
      </View>
      <ScrollView style={ClientStyle.scrollView}>
        <ListButton
          action={() => navigation.navigate('Authenticate')}
          text='Sign in'
          iconName='login'
        />
        <ListButton
            action={() => {
                navigation.navigate("Update Details");
            }}
            text="Update Account"
            iconName="edit"
        />
        <ListButton
            action={() => {
                logoutUser();
                navigation.navigate("Authenticate");
            }}
            text="LogOut"
            iconName="log-out"
        />
        <ListButton
            action={() => {
                navigation.navigate("Authenticate");
            }}
            text="Delete Account"
            action={() => {
                Alert.alert(
                    "Deletion request.",
                    "Are you sure you want to delete your account?",
                    [
                        {
                            text: "Cancel",
                            onPress: () => {}, // Empty onPress function to close the alert
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
                                            onPress: () => {}, // Empty onPress function to close the alert
                                            style: "cancel",
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
                                    {cancelable: false}
                                );
                            },
                        },
                    ],
                    {cancelable: false}
                );
            }}
            iconName="remove-user"
        />
        <ListButton
            action={() => {
                navigation.navigate("About");
            }}
            text="About"
            iconName='info'
        />
      </ScrollView>
    </View>
  );
};

export default ClientsScreen;
