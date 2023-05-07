import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const ClientStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E9ECE6",
  },

  topPageContent: {
    alignItems: "center",
    backgroundColor: "#E9ECE6",
  },

  profileImage: {
    padding: 25,
    marginTop: 55,
    marginBottom: 35,
    height: 150,
    width: 250,
    resizeMode: "contain",
  },

  headingText: {
    fontSize: 20,
    margin: 10,
    color: "#294E4B",
  },

  profileActionsView: {
    backgroundColor: "rgba(178, 187, 185, 1)",
    paddingTop: 5,
    marginTop: 60,
  },

  profileActionsCell: {
    backgroundColor: "rgba(178, 187, 185, 1)",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profileActionsText: {
    backgroundColor: "rgba(178, 187, 185, 1)",
    fontSize: 20,
    padding: 21,
  },

  buttonIcon: {
    height: 27,
    width: 27,
    marginRight: 20,
  },

});
