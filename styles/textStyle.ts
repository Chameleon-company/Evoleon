import { StyleSheet } from 'react-native';

export const createTextStyle = (colorScheme) =>
  StyleSheet.create({
    themeText: {
      color: colorScheme.colors.text,
    },
  });
