// Importing necessary libraries and components
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import MenuIcon from "../components/MenuIcon";
import { UserDetailsPageStyle } from "../styles/updateUserDetails";
import { ButtonStyle } from "../styles/buttonStyle";
import {
  updateUserData,
  fetchUserDetails,
  getuserIsAuthenticated,
} from "../web/firebase";
import Avatar from "react-native-boring-avatars";

// User details interface
interface UserDetails {
  name: string;
  displayName: string;
  email: string;
  phone: string;
  residentialAddress: string;
  registrationNumber: string;
  carType: string;
}

// UpdateUserDetailsScreen Component
const UpdateUserDetailsScreen = () => {
  const navigation = useNavigation();

  // Set header left button as MenuIcon
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  }, [navigation]);

  // State variables
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    displayName: "",
    email: "",
    phone: "",
    residentialAddress: "",
    registrationNumber: "",
    carType: "",
  });

  const [name, setName] = useState<string>("");

  // Focus effect to fetch user details when screen is focused
  useFocusEffect(
    useCallback(() => {
      if (getuserIsAuthenticated()) {
        fetchUserDetails().then((details) => {
          setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            ...details,
          }));
          if (details.name) {
            setName(details.name);
          }
        });
      }
      return () => {
        // Cleanup logic goes here
      };
    }, [])
  );

  // Function to handle updating user details
  const handleUpdate = (key: keyof UserDetails, value: string) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [key]: value,
    }));
  };

  // Function to handle save button press
  const handleSavePress = () => {
    updateUserData(userDetails);
  };

  // Function to handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Render UpdateUserDetailsScreen Component
  return (
    <View style={UserDetailsPageStyle.container}>
      <View style={UserDetailsPageStyle.profileContainer}>
        <Avatar size={90} variant="beam" name={name} />
      </View>
      // Rest of the code
      <View style={UserDetailsPageStyle.userDetailsForm}>
        <Text style={UserDetailsPageStyle.userDetailsLabel}>Name:</Text>
          <TextInput
              style={UserDetailsPageStyle.input}
              onChangeText={(text) => handleUpdate("name", text)}
              value={userDetails.name}
          />

          <Text style={UserDetailsPageStyle.userDetailsLabel}>Display Name:</Text>
          <TextInput
              style={UserDetailsPageStyle.input}
              onChangeText={(text) => handleUpdate("displayName", text)}
              value={userDetails.displayName}
          />

          <Text style={UserDetailsPageStyle.userDetailsLabel}>Email:</Text>
          <TextInput
              style={UserDetailsPageStyle.input}
              onChangeText={(text) => handleUpdate("email", text)}
              value={userDetails.email}
          />

          <Text style={UserDetailsPageStyle.userDetailsLabel}>Phone:</Text>
          <TextInput
              style={UserDetailsPageStyle.input}
              onChangeText={(text) => handleUpdate("phone", text)}
              value={userDetails.phone}
          />

          <Text style={UserDetailsPageStyle.userDetailsLabel}>Residential Address:</Text>
          <TextInput
              style={UserDetailsPageStyle.input}
              onChangeText={(text) => handleUpdate("residentialAddress", text)}
              value={userDetails.residentialAddress}
          />

          <Text style={UserDetailsPageStyle.userDetailsLabel}>Registration Number:</Text>
          <TextInput
              style={UserDetailsPageStyle.input}
              onChangeText={(text) => handleUpdate("registrationNumber", text)}
              value={userDetails.registrationNumber}
          />

          <Text style={UserDetailsPageStyle.userDetailsLabel}>Car Type:</Text>
          <TextInput
              style={UserDetailsPageStyle.input}
              onChangeText={(text) => handleUpdate("carType", text)}
              value={userDetails.carType}
          />
      </View>
      <TouchableOpacity style={ButtonStyle.Button} onPress={handleSavePress}>
        <Text style={ButtonStyle.Text}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[{ marginTop: 20 }, ButtonStyle.Button]}
        onPress={handleBackPress}
      >
        <Text style={ButtonStyle.Text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateUserDetailsScreen;
