import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const ClientStyle = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#F2F3F5", // Light grey for a cleaner look
    backgroundColor: "#E9ECE6",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    // backgroundColor: "#F2F3F5",
    backgroundColor: "#E9ECE6",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "#294E4B", // Add a border color
    borderWidth: 3, // Add a border width
  },
  topPageContent: {
    alignItems: "center",
    // backgroundColor: "#F2F3F5",
    backgroundColor: "#E9ECE6",
  },
  headingText: {
    fontSize: 22, // Larger font size
    margin: 10,
    color: "#294E4B",
    fontWeight: "bold", // Bold text for headers
  },
  profileActionsView: {
    backgroundColor: "#fff", // White color for a clean look
    paddingTop: 5,
    marginTop: 60,
    borderRadius: 10, // Rounded corners
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Shadow for a 'floating' effect
  },
  profileActionsCell: {
    backgroundColor: "#F6F7F5",
    borderBottomColor: "#D1D1D1", // Light grey color for separators
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15, // More padding
  },
  profileActionsText: {
    fontSize: 18, // Slightly larger font size
    color: "#333", // Dark grey for text
  },
  buttonIcon: {
    height: 27,
    width: 27,
    marginRight: 20,
    tintColor: "#294E4B", // Icon color
  },
});