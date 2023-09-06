import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const IconButton = ({
  icon,
  onPress,
  style,
  iconSize = 28,
  touchable = true,
  ...props
}) => {
  if (touchable) {
    return (
      <TouchableOpacity
        style={[styles.favButton, style]}
        onPress={onPress}
        {...props}
      >
        <View style={styles.iconCircle}>
          <Entypo name={icon} size={iconSize} color="white" />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.iconCircle}>
        <Entypo name={icon} size={iconSize} color="white" />
      </View>
    );
  }
};

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
