import { StyleSheet } from 'react-native';

export const createAboutStyle = (colorScheme) =>
  StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme.colors.background,
    },
    currentVersion: {
      position: 'absolute',
      top: 100,
    },
    updateVersion: {
      backgroundColor: colorScheme.colors.background,
      position: 'absolute',
      top: 120,
    },
  });
