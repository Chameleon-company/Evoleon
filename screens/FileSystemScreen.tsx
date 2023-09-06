import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import { Text, View, useTheme } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';

import { createAuthenticationStyle } from '../styles/authenticateStyle';

export default function FileSystemScreen() {
  const navigation = useNavigation();

  const colorScheme = useTheme();
  const AuthenticationStyle = createAuthenticationStyle(colorScheme);

  return (
    <View style={AuthenticationStyle.Centered}>
      <Text style={AuthenticationStyle.text}>
        This is FileSystem Screen. This pages purpose needs to be investigated.
      </Text>
    </View>
  );
}
