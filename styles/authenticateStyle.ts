import { StyleSheet } from 'react-native';

export const createAuthScreenStyle = (colorScheme) =>
  StyleSheet.create({
    Centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    frontPageLogo: {
      borderRadius: 50,
      // Add a border color
      borderColor: colorScheme.colors.primary,
      // Add a border width
      borderWidth: 3,
      width: 200,
      height: 200,
      marginBottom: 125,
    },
  });
