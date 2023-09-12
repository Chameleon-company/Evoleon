import { StyleSheet } from 'react-native';

export const createContactUsStyle = (colorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme.colors.background,
      paddingHorizontal: 16, // Added horizontal padding
      paddingVertical: 20, // Increased vertical padding for title
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: colorScheme.colors.text,
      marginBottom: 20, // Adjusted margin for title
    },
    section: {
      backgroundColor: colorScheme.colors.background,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colorScheme.colors.border,
      marginBottom: 16, // Added margin between sections
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      color: colorScheme.colors.text,
    },
    sectionContent: {
      fontSize: 14,
      color: colorScheme.colors.text,
    },
    contactInfo: {
      marginBottom: 20,
    },
    contactText: {
      fontSize: 14,
      color: colorScheme.colors.text,
      marginBottom: 8,
    },
    emailLink: {
      color: colorScheme.colors.primary,
      fontSize: 14,
      textDecorationLine: 'underline',
    },
  });
