import { StyleSheet } from "react-native";

// Styles for LoginScreen
export const LoginScreenStyle = StyleSheet.create({
  // Style for main content container
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(233,236,230)",
  },
  
  // Style for upper content container
  upperContent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 5,
    left: 10,
    right: 10,
    backgroundColor: "rgb(233,236,230)",
  },
  
  // Style for input view
  inputView: {
    backgroundColor: "rgba(0,0,0,0)",
    marginTop: 50,
    marginBottom: 50,
    width: 300,
  },
  
  // Style for input fields
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1.5,
    marginBottom: 25,
    justifyContent: "flex-start",
  },
  
  // Style for Signup link text
  SignupLink: {
    color: "#294E4B",
    fontWeight: "bold",
  },
  
  // Style for 'Forgot Password' button
  forgotPassButton: {
    marginBottom: 20,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  
  // Style for primary action button
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 50,
    top: 1,
    backgroundColor: "rgb(41,78,75)",
  },
  
  // Style for 'Cancel' button
  cancelButton: {
    marginBottom: 20,
    marginTop: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  
  // Style for 'Cancel' button text
  cancelText: {
    color: "#294E4B",
    fontWeight: "bold",
  },
});
