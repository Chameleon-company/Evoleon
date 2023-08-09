import { StyleSheet } from "react-native";

export const SettingsStyle = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E9ECE6", // Light grey for a cleaner look
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#E9ECE6",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "#294E4B", // Add a border color
    borderWidth: 3, // Add a border width
  },
  headingText: {
    fontSize: 22, // Larger font size
    margin: 10,
    color: "#294E4B",
    fontWeight: "bold", // Bold text for headers
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#E9ECE6",
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
  },
});
