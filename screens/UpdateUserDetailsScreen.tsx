//Import required modules
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { UserDetailsPageStyle } from "../styles/updateUserDetails";
import { handleSave } from "../web/firebase";

//Declare an interface for user details
interface UserDetails {
  name: string;
  email: string;
  phone: string;
  residentialAddress: string;
  registrationNumber: string;
  carType: string;
}

//User Details component
const UserDetails = () => {
  // Initializing user details state with the useState hook
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    residentialAddress: "",
    registrationNumber: "",
    carType: "",
  });


  //Function to handle update to user details
  const handleUpdate = (key: keyof UserDetails, value: string) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [key]: value, //Update specified key with new value
    }));
  };

  //UI rendering
  return (
    <View style={UserDetailsPageStyle.container}>
      <View style={UserDetailsPageStyle.userDetailsForm}>
        {/* Label and input field for name */}
        <Text style={UserDetailsPageStyle.userDetailsLabel}>Name:</Text>
        <TextInput
          style={UserDetailsPageStyle.userDetailsInput}
          onChangeText={(text) => handleUpdate("name", text)}
          value={userDetails.name} // Bind input field value to corresponding state value
        />
         {/* Label and input field for email */}
        <Text style={UserDetailsPageStyle.userDetailsLabel}>Email:</Text>
        <TextInput
          style={UserDetailsPageStyle.userDetailsInput}
          onChangeText={(text) => handleUpdate("email", text)}
          value={userDetails.email}
        />
        {/* Label and input field for phone */}
        <Text style={UserDetailsPageStyle.userDetailsLabel}>Phone:</Text>
        <TextInput
          style={UserDetailsPageStyle.userDetailsInput}
          onChangeText={(text) => handleUpdate("phone", text)}
          value={userDetails.phone}
        />
        {/* Label and input field for residential address */}
        <Text style={UserDetailsPageStyle.userDetailsLabel}>
          Residential Address:
        </Text>
        <TextInput
          style={UserDetailsPageStyle.userDetailsInput}
          onChangeText={(text) => handleUpdate("residentialAddress", text)}
          value={userDetails.residentialAddress}
        />
        {/* Label and input field for registration number */}
        <Text style={UserDetailsPageStyle.userDetailsLabel}>
          Registration Number:
        </Text>
        <TextInput
          style={UserDetailsPageStyle.userDetailsInput}
          onChangeText={(text) => handleUpdate("registrationNumber", text)}
          value={userDetails.registrationNumber}
        />
        {/* Label and input field for car type */}
        <Text style={UserDetailsPageStyle.userDetailsLabel}>Car Type:</Text>
        <TextInput
          style={UserDetailsPageStyle.userDetailsInput}
          onChangeText={(text) => handleUpdate("carType", text)}
          value={userDetails.carType}
        />
      </View>
      {/* Button to save user details */}
      <TouchableOpacity
        style={UserDetailsPageStyle.userDetailsButton}
        onPress={handleSave}// Handle button press event using function from firebase JS file
      >
        <Text style={UserDetailsPageStyle.userDetailsButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
