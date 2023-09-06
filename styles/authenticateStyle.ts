import { StyleSheet } from 'react-native';

export const createAuthenticationStyle = (colorScheme) =>
  StyleSheet.create({
    Centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: colorScheme.colors.background,
    },
    text: {
      color: colorScheme.colors.text,
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
