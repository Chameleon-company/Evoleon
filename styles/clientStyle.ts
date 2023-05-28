import { StyleSheet } from "react-native";

// ClientScreen styles
export const ClientStyle = StyleSheet.create({
  // Style for the main content container
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E9ECE6", // Light green color for a clean look
  },
  // Style for the profile container
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#E9ECE6",
  },
  // Style for the profile image
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "#294E4B", // Add a border color
    borderWidth: 3, // Add a border width
  },
  // Style for the top page content
  topPageContent: {
    alignItems: "center",
    backgroundColor: "#E9ECE6",
  },
  // Style for the heading text
  headingText: {
    fontSize: 22, // Larger font size
    margin: 10,
    color: "#294E4B",
    fontWeight: "bold", // Bold text for headers
  },
  // Style for the profile actions view
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
  // Style for the profile actions cell
  profileActionsCell: {
    backgroundColor: "#F6F7F5",
    borderBottomColor: "#D1D1D1", // Light grey color for separators
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15, // More padding
  },
  // Style for the profile actions text
  profileActionsText: {
    fontSize: 18, // Slightly larger font size
    color: "#333", // Dark grey for text
  },
  // Style for the button icon
  buttonIcon: {
    height: 27,
    width: 27,
    marginRight: 20,
  },
});
