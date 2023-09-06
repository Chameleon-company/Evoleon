import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

// This just exports a touchable button with the width and height defined so it's cleaner within code.
// Use like this:
// <IconButton
//  icon="heart"
//  onPress={() => {
//    someFunction()
//  }}
// />

const IconButton = ({ icon, onPress, style, iconSize = 28, touchable = true, ...props }) => {
  const IconContent = (
    <View style={styles.iconCircle}>
      <Entypo name={icon} size={iconSize} color="white" />
    </View>
  );

  return touchable ? (
    <TouchableOpacity style={[styles.touchStyle, style]} onPress={onPress} {...props}>
      {IconContent}
    </TouchableOpacity>
  ) : (
    IconContent
  );
};

const styles = StyleSheet.create({
  touchStyle: {
    // add any global button styles here
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#00a651",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconButton;
