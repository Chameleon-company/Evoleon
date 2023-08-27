import { StyleSheet } from 'react-native';

export const createAuthScreenStyle = (colorScheme) =>
  StyleSheet.create({
    Centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    frontPageLogo: {
      width: 200,
      height: 200,
      marginBottom: 125,
    },
  });
