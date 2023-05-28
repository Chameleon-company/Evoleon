// Import StyleSheet from 'react-native'
import { StyleSheet } from "react-native";

// Define the component styles
export const MapStyle = StyleSheet.create({
  // Style for the map view
  ViewStyle: {
    flex: 1, // Make component take up all available space
    backgroundColor: "#ffffff", // Set background color
  },

  // Style for the marker popup
  MarkerPopupStyle: {
    backgroundColor: "rgba(52, 52, 52, 0.8)", // Set background color and transparency
    height: 150,
    width: 250,
    borderRadius: 25,
    flexDirection: "column", // Set main axis to vertical
    justifyContent: "space-between", // Distribute children along the column evenly
  },

  // Style for the marker popup title
  MarkerPopupStyleTextTitle: {
    textAlign: "center", // Align text to center
    color: "white", // Set text color
    marginTop: 15,
    fontSize: 20,
    marginBottom: 0,
  },
  
  // Style for the marker popup text
  MarkerPopupStyleText: {
    textAlign: "center", // Align text to center
    color: "white", // Set text color
    fontSize: 15,
  },

  // Style for the icon
  IconStyle: {
    height: 50,
    width: 50,
    marginLeft: 10, // Set left margin
  },

  // Style for the icon position
  IconPosition: {
    flexDirection: "row", // Set main axis to horizontal
    backgroundColor: "rgba(52, 52, 52, 0)", // Set background color and transparency
    alignContent: "center", // Align children along the cross axis to the center
    marginBottom: 10, // Set bottom margin
  },

  // Style for the top container
  topContainer: {
    marginTop: 0, // Set top margin
    backgroundColor: "#294E4B", // Set background color
    opacity: 0.8, // Set transparency
    flexDirection: "row", // Set main axis to horizontal
    padding: 10, // Set padding
  },

  // Style for the switch text
  switchText: {
    color: "#ffffff", // Set text color
    fontSize: 20, // Set font size
    paddingRight: 12, // Set right padding
  },

  // Style for the map icons
  mapIcons: {
    height: 20,
    width: 20,
  },
});
