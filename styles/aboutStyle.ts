import { StyleSheet } from "react-native";
import Color from '../constants/Colors';

export const AboutStyle = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.light.BACKGROUND,
  },
  currentVersion: {
    position: "absolute",
    top: 100,
  },
  termsButton: {
    backgroundColor: Color.light.BACKGROUND,
    position: "absolute",
    top: 300,
  },
  updateButton: {
    backgroundColor: Color.light.BACKGROUND,
    position: "absolute",
    top: 160,
  },
  updateVersion: {
    backgroundColor: Color.light.BACKGROUND,
    position: "absolute",
    top: 120,
  },
});
