// Importing necessary libraries
import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

// This IconButton component provides a touchable button with a customizable icon. 
// Use as follows:
// <IconButton
//  icon="heart"
//  onPress={() => someFunction()}
// />

const IconButton = ({ icon, onPress, style, iconSize = 28, touchable = true, ...props }) => {

  // Icon view structure which is common for both touchable and non-touchable icons
  const IconView = (
    <View style={styles.iconCircle}>
      <Entypo name={icon} size={iconSize} color="white" />
    </View>
  );

  // Check if icon is touchable
  if (touchable) {
    return (
      <TouchableOpacity
        style={[styles.favButton, style]}
        onPress={onPress}
        {...props}
      >
        {IconView}
      </TouchableOpacity>
    );
  }

  // If icon is not touchable, return only IconView
  return IconView;
};

// Stylesheet for the icon
const styles = StyleSheet.create({
  favButton: {},
  iconCircle: {
    width: 48, // Adjust the size of the circle
    height: 48, // Adjust the size of the circle
    borderRadius: 24, // Set the borderRadius to half of the width and height
    backgroundColor: "#00a651",
    alignItems: "center", // Center the icon horizontally
    justifyContent: "center", // Center the icon vertically
  },
});

export default IconButton;
