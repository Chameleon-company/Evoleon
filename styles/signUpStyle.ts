import { StyleSheet } from "react-native";
import Color from '../constants/Colors';

export const SignUpScreenStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
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
  Text: {
    borderBottomColor: "#000",
    borderBottomWidth: 1.5,
    marginBottom: 25,
    // paddingHorizontal: 50,
    justifyContent: "flex-start",
  },

  InputArea: {
    marginTop: 50,
    marginBottom: 50,
    width: 300,
  },

  CheckBox: {
    flexDirection: "row",
    backgroundColor: Color.BACKGROUND,
    marginBottom: 15,
  },

  CheckBoxText: {
    marginLeft: 10,
    width: 250,
    flexWrap: "wrap",
    marginBottom: 10,
    color: "rgba(55, 72, 55, 0.8)",
  },

});
