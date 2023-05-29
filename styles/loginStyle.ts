import { StyleSheet } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { FlipInEasyX } from "react-native-reanimated";

export const LoginScreenStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  SignupLink: {
    color: "#294E4B",
    fontWeight: "bold",
  },
  forgotPassButton: {
    marginBottom: 20,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 50,
    top: 1,
    backgroundColor: "rgb(41,78,75)",
  },
  cancelButton: {
    marginBottom: 20,
    marginTop: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelText: {
    color: "#294E4B",
    fontWeight: "bold",
  },
});
