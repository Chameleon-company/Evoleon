import { StyleSheet } from 'react-native';

export const createNewsStyle = (colorScheme) =>
  StyleSheet.create({
    Centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: colorScheme.colors.background,
    },
    NewsImage: {
      borderRadius: 5,
      // Add a border color
      borderColor: colorScheme.colors.primary,
      // Add a border width
      borderWidth: 3,
      width: 250,
      height: 150,

    },
    sectionHeading: {
      backgroundColor: colorScheme.colors.background,
      color: colorScheme.colors.text,
      position: 'relative',
      marginBottom: 1,
      marginTop: 4,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20
    },
    subSectionHeading: {
      backgroundColor: colorScheme.colors.background,
      color: colorScheme.colors.text,
      position: 'relative',
      marginBottom: 1,
      marginTop: 4,
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 18,
    },
    textParagraph: {
      backgroundColor: colorScheme.colors.background,
      color: colorScheme.colors.text,
      padding: 5,
      marginTop: 0,
      fontSize: 15,
      textAlign: 'justify',
    },
    underlinetext: {
      backgroundColor: colorScheme.colors.background,
      color: colorScheme.colors.text,
      padding: 5,
      marginTop: 0,
      fontSize: 15,
      textAlign: 'justify',
      textDecorationLine: 'underline',
      marginBottom: 20,
    },
    pageTitle: {
      backgroundColor: colorScheme.colors.background,
      color: colorScheme.colors.text,
      margin: 20,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
