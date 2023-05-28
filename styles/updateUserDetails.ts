// Import dependencies
import { StyleSheet } from "react-native";

export const UserDetailsPageStyle = StyleSheet.create({
    // Main container style
    container: {
        flex: 1,
        backgroundColor: '#E9ECE6',
    },

    // Profile container style
    profileContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    // Profile image style
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50, // this makes the image round
    },

    // User details form style
    userDetailsForm: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    // User details label style
    userDetailsLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },

    // Input field style
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5, // Gives the input field round corners
        paddingHorizontal: 10, // Padding within the input field
        marginBottom: 10, // Margin at the bottom of the input field
    },

    // Button style
    button: {
        backgroundColor: "#4CAF50", // Button color
        padding: 10, // Padding within the button
        marginHorizontal: 20, // Margin on the left and right of the button
        marginBottom: 20, // Margin at the bottom of the button
        borderRadius: 5, // Gives the button round corners
        alignItems: "center", // Centers the text within the button
    },

    // Button text style
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
