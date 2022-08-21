import { StyleSheet } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { FlipInEasyX } from "react-native-reanimated";

export const LoginStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(233,236,230)",
  },
  upperContent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 5,
    left: 10,
    right: 10,

    backgroundColor: "rgb(233,236,230)",
  },
  inputView: {
    backgroundColor: "rgba(0,0,0,0)",
    position: "absolute",
    top: 120,
    left: 10,
    right: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 56,
    width: 300,

    marginTop: 25,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0)",
    backgroundColor: "rgba(0,0,0,0)",
  },
  button: {
    width: 360,
    top: 70,
  },
  cancelButton: {
    width: 360,
    top: 140,
  },
});
