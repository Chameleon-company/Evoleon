import { StyleSheet } from 'react-native';

export const createLoginScreenStyle = (colorScheme) =>
  StyleSheet.create({
    content: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    upperContent: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 5,
      left: 10,
      right: 10,
    },
    inputView: {
      marginTop: 50,
      marginBottom: 50,
      width: 300,
    },
    input: {
      borderBottomColor: colorScheme.colors.border,
      borderBottomWidth: 1.5,
      marginBottom: 25,
      // paddingHorizontal: 50,
      justifyContent: 'flex-start',
    },
  });
