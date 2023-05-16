import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuIcon from "../components/MenuIcon";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { UserDetailsPageStyle } from "../styles/updateUserDetails";
import { ButtonStyle } from "../styles/buttonStyle";
import { updateUserData } from "../web/firebase";


interface UserDetails {
    name: string;
    email: string;
    phone: string;
    residentialAddress: string;
    registrationNumber: string;
    carType: string;
}

export default function UpdateUserDetailsScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
        });
    }, [navigation]);

    const [userDetails, setUserDetails] = useState<UserDetails>({
        name: "",
        email: "",
        phone: "",
        residentialAddress: "",
        registrationNumber: "",
        carType: "",
    });

    const handleUpdate = (key: keyof UserDetails, value: string) => {
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            [key]: value,
        }));
    };

    return (
        <View style={UserDetailsPageStyle.container}>
            <View style={UserDetailsPageStyle.profileContainer}>
                          {/* avatar goes here */}
            </View>
            <View style={UserDetailsPageStyle.userDetailsForm}>
                <Text style={UserDetailsPageStyle.userDetailsLabel}>Name:</Text>
                <TextInput
                    style={UserDetailsPageStyle.input}
                    onChangeText={(text) => handleUpdate("name", text)}
                    value={userDetails.name}
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

            {/* Button to save user details */}
            <TouchableOpacity
                style={ButtonStyle.Button}
                onPress={updateUserData}// Handle button press event using function from firebase JS file
            >
                <Text style={ButtonStyle.Text}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}