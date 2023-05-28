// Importing necessary libraries and components
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import main from "../styles/main";

// Main component for FileSystemScreen
export default function FileSystemScreen() {
  // Getting the navigation object from the Navigation context
  const navigation = useNavigation();

  // Set options for navigation
  useEffect(() => {
    // Setting the left header option as MenuIcon component
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />,
    });
  }, []); // Empty dependency array means this effect runs once on component mount

  // Rendering the FileSystem Screen
  return (
    <View style={main.centered}>
      <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        This is FileSystem Screen
      </Text>
    </View>
  );
}
