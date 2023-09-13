import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Text, View, useTheme } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { useEffect, useState } from 'react';
import {
  getUserAuthStatus,
  getuserIsAuthenticated,
  getUserNameTextForProfilePage,
  LoginSignOutButtonPressed,
  userDeleteAccount,
  logoutUser,
} from '../web/firebase';

import { createClientStyle } from '../styles/clientStyle';

const ListButton = ({ action, text, iconName }) => {
  const defaultImage = require('../assets/Arrow.png');

  const colorScheme = useTheme();
  const ClientStyle = createClientStyle(colorScheme);

  return (
    <TouchableOpacity style={ClientStyle.profileActionsCell} onPress={action}>
      <Text style={ClientStyle.profileActionsText}>{text}</Text>
      <Entypo name={iconName} size={24} style={ClientStyle.buttonIcon} />
    </TouchableOpacity>
  );
};

export default function ClientsScreen() {
  // Define navigation using the useNavigation hook.
  const navigation = useNavigation();

  const colorScheme = useTheme();
  const ClientStyle = createClientStyle(colorScheme);

  const UnauthProfileText = 'Please login to view account.';

  // Define state variables to hold profile and login sign out text.
  const [profileText, setProfileText] = useState(UnauthProfileText);

  const [LoginSignOutText, setLoginSignOutText] = useState('Login');

  // Set the headerLeft icon to the menu icon.
  useEffect(() => {
    // Set profile and login or sign out text when screen is focused.
    navigation.addListener('focus', () => {
      setProfileText(getUserNameTextForProfilePage());
      setLoginSignOutText(getUserAuthStatus().Text);
    });
  });

  return (
    <View style={ClientStyle.content}>
      {/* Display Evoleon logo image or profile image */}
      <View style={ClientStyle.profileContainer}>
        <Image style={ClientStyle.profileImage} source={require('../assets/EvoleonUserProfileTemp.png')} />
        <Text style={ClientStyle.headingText}>{profileText}</Text>
      </View>
      <ScrollView style={ClientStyle.scrollView}>
        <ListButton
          action={() => {
            navigation.navigate('Authenticate');
          }}
          text="Login"
          iconName="login"
        />
        <ListButton
          action={() => {
            navigation.navigate('Update Details');
          }}
          text="Update Account"
          iconName="edit"
        />
        <ListButton
          action={() => {
            logoutUser();
            navigation.navigate('Authenticate');
          }}
          text="Logout"
          iconName="log-out"
        />
        <ListButton
          action={() => {
            navigation.navigate('Authenticate');
          }}
          text="Delete Account"
          action={() => {
            Alert.alert(
              'Deletion request.',
              'Are you sure you want to delete your account?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {}, // Empty onPress function to close the alert
                  style: 'cancel',
                },
                {
                  text: 'Agree',
                  onPress: async () => {
                    Alert.alert(
                      'This action cannot be undone.',
                      'All user data will be removed from the application after this request.',
                      [
                        {
                          text: 'Cancel',
                          onPress: () => {}, // Empty onPress function to close the alert
                          style: 'cancel',
                        },
                        {
                          text: 'Understood',
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
          iconName="remove-user"
        />
        <ListButton
          action={() => {
            navigation.navigate('About');
          }}
          text="About"
          iconName="info"
        />
        <ListButton
          action={() => {
            navigation.navigate('Help and Support');
          }}
          text="Help and Support"
          iconName="help"
        />
      </ScrollView>
    </View>
  );
}
