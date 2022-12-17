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
    padding: 30,
    marginTop: 55,
    marginBottom: 40,
    borderTopRightRadius: 12,
    height: 100,
    width: 200,
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
    padding: 20,
  },

  arrow: {
    height: 25,
    width: 25,
    marginRight: 20,
  },

  logOutIcon: {
    height: 33,
    width: 33,
    marginRight: 20,
  },

  lightModeIcon: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
});
