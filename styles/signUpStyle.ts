import { StyleSheet } from 'react-native';

export const createSignupStyle = (colorScheme) =>
  StyleSheet.create({
    content: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: colorScheme.colors.background,
    },
    text: {
      color: colorScheme.colors.text,
    },
    upperContent: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 5,
      left: 10,
      right: 10,
      backgroundColor: colorScheme.colors.background,
    },
    inputView: {
      position: 'absolute',
      color: colorScheme.colors.text,
      top: 120,
      left: 10,
      right: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      color: colorScheme.colors.text,
      height: 56,
      width: 300,
      marginTop: 25,
      borderWidth: 1,
      borderRadius: 10,
    },
    Text: {
      color: colorScheme.colors.text,
      borderBottomColor: colorScheme.colors.border,
      borderBottomWidth: 1.5,
      marginBottom: 25,
      // paddingHorizontal: 50,
      justifyContent: 'flex-start',
    },
    InputArea: {
      color: colorScheme.colors.text,
      marginTop: 50,
      marginBottom: 50,
      width: 300,
    },
    CheckBox: {
      flexDirection: 'row',
      backgroundColor: colorScheme.colors.background,
      marginBottom: 15,
    },
    CheckBoxText: {
      marginLeft: 10,
      width: 250,
      flexWrap: 'wrap',
      marginBottom: 10,
      color: colorScheme.colors.text,
    },
  });
