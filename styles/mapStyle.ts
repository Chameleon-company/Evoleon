import { StyleSheet } from "react-native";
import Color from '../constants/Colors';

export const MapStyle = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    backgroundColor: Color.BACKGROUND,
  },

  MarkerPopupStyle: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    height: 150,
    width: 250,
    borderRadius: 25,

    //Position the 4 button icons to bottom edge of popup view
    flexDirection: "column",
    justifyContent: "space-between",
  },

  MarkerPopupStyleTextTitle: {
    textAlign: "center",
    color: "white",
    marginTop: 15,
    fontSize: 20,
    marginBottom: 0,
  },
  MarkerPopupStyleText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },

  IconStyle: {
    height: 50,
    width: 50,
    marginLeft: 10,
  },

  IconPosition: {
    flexDirection: "row",
    backgroundColor: "rgba(52, 52, 52, 0)",
    alignContent: "center",
    marginBottom: 10,
  },

  topContainer: {
    marginTop: 0,
    backgroundColor: Color.APPHEADER,
    opacity: 0.8,
    flexDirection: "row",
    padding: 10,
  },

  switchText: {
    color: "#ffffff",
    fontSize: 20,
    paddingRight: 12,
  },

  mapIcons: {
    height: 20,
    width: 20,
  },
});
