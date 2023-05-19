// Import dependencies
import { StyleSheet } from "react-native";

export const SignUpScreenStyle = StyleSheet.create({
  // Main content container
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgb(233,236,230)",
  },
  
  // Upper content container
  upperContent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 5,
    left: 10,
    right: 10,
    backgroundColor: "rgb(233,236,230)",
  },

  // Input view container
  inputView: {
    position: "absolute",
    top: 120,
    left: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)",
  },

  // Input box
  input: {
    height: 56,
    width: 300,
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0)",
    backgroundColor: "rgba(0,0,0,0)",
  },

  // Signup link
  SignupLink: {
    color: "#294E4B",
    fontWeight: "bold",
  },

  // Forgot password button
  forgotPassButton: {
    marginTop: 50,
    marginBottom: 20,
  },

  // Terms and conditions button
  termsConditionsButton: {
    marginTop: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  // Main button style
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 85,
    borderRadius: 50,
    width: 360,
    top: 1,
    backgroundColor: "rgb(41,78,75)",
  },

  // Cancel button
  cancelButton: {
    marginTop: 100,
    marginBottom: 20,
  },

  // Cancel button text
  cancelText: {
    color: "#294E4B",
    fontWeight: "bold",
  },

  // Text style
  Text: {
    borderBottomColor: "#000",
    borderBottomWidth: 1.5,
    marginBottom: 25,
    justifyContent: "flex-start",
  },

  // Input area
  InputArea: {
    marginTop: 50,
    marginBottom: 50,
    width: 300,
  },

  // Checkbox container
  CheckBox: {
    flexDirection: "row",
    backgroundColor: "#E9ECE6",
    marginBottom: 15,
  },

  // Checkbox text
  CheckBoxText: {
    marginLeft: 10,
    width: 250,
    flexWrap: "wrap",
    marginBottom: 10,
    color: "rgba(55, 72, 55, 0.8)",
  },
});
