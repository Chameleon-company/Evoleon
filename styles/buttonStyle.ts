import { StyleSheet } from 'react-native';

export const createButtonStyle = (colorScheme) =>
  StyleSheet.create({
    Button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      borderRadius: 50,
      backgroundColor: colorScheme.colors.button,
      width: 'auto',
      minWidth: 300,
      marginBottom: 15,
    },
    BackButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      borderRadius: 50,
      backgroundColor: colorScheme.colors.button,
      width: 'auto',
      minWidth: 300,
      marginTop: 5,
    },
    Text: {
      color: colorScheme.colors.text,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
    },
    LoginLink: {
      color: colorScheme.colors.primary,
      fontWeight: 'bold',
    },
    signupLink: {
      color: colorScheme.colors.primary,
      fontWeight: 'bold',
    },
    ForgotPasswordLink: {
      marginBottom: 20,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
    },
    cancelButton: {
      marginBottom: 20,
      marginTop: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelText: {
      color: colorScheme.colors.button,
      fontWeight: 'bold',
    },
  });
