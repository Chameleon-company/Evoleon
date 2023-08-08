import { StyleSheet } from "react-native";
import Color from '../constants/Colors';

export const AboutStyle = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.BACKGROUND,
  },
  currentVersion: {
    position: "absolute",
    top: 100,
  },
  updateVersion: {
    backgroundColor: Color.BACKGROUND,
    position: "absolute",
    top: 120,
  },
});
