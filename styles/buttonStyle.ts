import { StyleSheet } from "react-native";
import Color from '../constants/Colors'

export const ButtonStyle = StyleSheet.create({
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor: Color.BUTTONCOLOR,
    width: "auto",
    minWidth: 300,
    marginBottom: 10,
  },
  BackButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor:  Color.BUTTONCOLOR,
    width: "auto",
    minWidth: 300,
    marginBottom: 10,
    marginTop: 30,
  },
  Text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  LoginLink: {
    color:  Color.BUTTONCOLOR,
    fontWeight: "bold",
  },
  SignupLink: {
    color: Color.BUTTONCOLOR,
    fontWeight: "bold",
  },
  forgotPassButton: {
    marginBottom: 20,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    color: Color.DEFAULTTEXT,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 50,
    top: 1,
    backgroundColor: Color.BUTTONCOLOR,
  },
  cancelButton: {
    marginBottom: 20,
    marginTop: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelText: {
    color: Color.DEFAULTTEXT,
    fontWeight: "bold",
  },
  termsButton: {
    backgroundColor: Color.BACKGROUND,
    position: "absolute",
    top: 300,
  },
  updateButton: {
    backgroundColor: Color.BACKGROUND,
    position: "absolute",
    top: 160,
  },
});
