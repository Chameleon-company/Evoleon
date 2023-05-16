import { StyleSheet } from "react-native";

export const UserDetailsPageStyle = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: '#E9ECE6'
    },
    profileContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    userDetailsForm: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    userDetailsLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
