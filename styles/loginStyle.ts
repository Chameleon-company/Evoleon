import { StyleSheet } from "react-native";
import Color from '../constants/Colors';

export const LoginScreenStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.BACKGROUND,
  },
  upperContent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 5,
    left: 10,
    right: 10,
    backgroundColor: Color.BACKGROUND,
  },
  inputView: {
    backgroundColor: "rgba(0,0,0,0)",
    marginTop: 50,
    marginBottom: 50,
    width: 300,
  },
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1.5,
    marginBottom: 25,
    // paddingHorizontal: 50,
    justifyContent: "flex-start",
  },
});
