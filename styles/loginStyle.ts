import { StyleSheet } from "react-native";
import Color from '../constants/Colors';

export const LoginScreenStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.light.BACKGROUND,
  },
  upperContent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 5,
    left: 10,
    right: 10,
    backgroundColor: Color.light.BACKGROUND,
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
    color: Color.light.BUTTONCOLOR,
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
    backgroundColor: Color.light.BUTTONCOLOR,
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
