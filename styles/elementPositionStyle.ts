import { StyleSheet } from 'react-native';

export const createElementPostionStyle = (colorScheme) =>
  StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: colorScheme.colors.background,
    },
    landingPageLogo: {
      borderRadius: 50,
      borderColor: colorScheme.colors.primary,
      borderWidth: 3,
      width: 200,
      height: 200,
      marginBottom: 125,
    },
  });
