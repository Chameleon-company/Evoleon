import { StyleSheet } from "react-native";
import Color from '../constants/Colors';

export const createMapStyle = (colorScheme) =>
  StyleSheet.create({
    ViewStyle: {
      flex: 1,
      backgroundColor: colorScheme.colors.primary,
    },
    MarkerPopupStyle: {
      backgroundColor: colorScheme.colors.notification,
      height: 150,
      width: 250,
      borderRadius: 25,
      //Position the 4 button icons to bottom edge of popup view
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    drawer: {
      marginBottom: 1000,
    },
    MarkerPopupStyleTextTitle: {
      color: colorScheme.colors.text,
      textAlign: 'center',
      marginTop: 15,
      fontSize: 20,
      marginBottom: 0,
    },
    MarkerPopupStyleText: {
      textAlign: 'center',
      color: colorScheme.colors.text,
      fontSize: 15,
    },
    IconStyle: {
      height: 50,
      width: 50,
      marginLeft: 10,
    },
    IconPosition: {
      flexDirection: 'row',
      backgroundColor: colorScheme.colors.text,
      alignContent: 'center',
      marginBottom: 10,
    },
    topContainer: {
      marginTop: 0,
      backgroundColor: colorScheme.colors.primary,
      opacity: 0.8,
      flexDirection: 'row',
      padding: 10,
    },
    switchText: {
      color: colorScheme.colors.text,
      fontSize: 20,
      paddingRight: 12,
    },
    mapIcons: {
      height: 20,
      width: 20,
    },
  });
