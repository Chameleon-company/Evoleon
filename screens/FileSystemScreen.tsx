import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { useEffect } from "react";
import {AuthScreenStyle} from "../styles/authenticateStyle";
import { Color } from '../constants/Colors';

export default function FileSystemScreen() {
  const navigation = useNavigation();

  return (
    <View style={AuthScreenStyle.Centered}>
      <Text lightColor="Color.light.text" darkColor="Color.dark.text">
        This is FileSystem Screen. This pages purpose needs to be investigated.
      </Text>
    </View>
  );
}
