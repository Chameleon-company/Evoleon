import { StyleSheet } from 'react-native';

export const createButtonStyle = (colorScheme) =>
  StyleSheet.create({
    Button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 50,
      backgroundColor: colorScheme.colors.button,
      width: 'auto',
      minWidth: 300,
      marginBottom: 10,
    },
    BackButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 50,
      backgroundColor: colorScheme.colors.button,
      width: 'auto',
      minWidth: 300,
      marginBottom: 10,
      marginTop: 30,
    },
    Text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
    },
    LoginLink: {
      color: colorScheme.colors.button,
      fontWeight: 'bold',
    },
    SignupLink: {
      fontWeight: 'bold',
    },
    forgotPassButton: {
      marginBottom: 20,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 120,
      borderRadius: 50,
      top: 1,
      backgroundColor: colorScheme.colors.button,
    },
    cancelButton: {
      marginBottom: 20,
      marginTop: 65,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelText: {
      fontWeight: 'bold',
    },
    termsButton: {
      backgroundColor: colorScheme.colors.button,
      position: 'absolute',
      top: 300,
    },
    updateButton: {
      backgroundColor: colorScheme.colors.button,
      position: 'absolute',
      top: 160,
    },
  });
