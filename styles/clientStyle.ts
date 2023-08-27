import { StyleSheet } from 'react-native';

export const createClientStyle = (colorScheme) =>
  StyleSheet.create({
    content: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colorScheme.colors.background,
    },
    profileContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: colorScheme.colors.background,
    },
    profileImage: {
      height: 100,
      width: 100,
      borderRadius: 50,
      // Add a border color
      borderColor: colorScheme.colors.button,
      // Add a border width
      borderWidth: 3,
    },
    topPageContent: {
      alignItems: 'center',
      backgroundColor: colorScheme.colors.background,
    },
    headingText: {
      fontSize: 22,
      margin: 10,
      color: colorScheme.colors.text,
      // Bold text for headers
      fontWeight: 'bold',
    },
    profileActionsView: {
      backgroundColor: colorScheme.colors.background,
      paddingTop: 5,
      marginTop: 60,
      // Rounded corners
      borderRadius: 10,
      shadowColor: colorScheme.colors.border,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      // Shadow for a 'floating' effect
      elevation: 5,
    },
    profileActionsCell: {
      backgroundColor: colorScheme.colors.background,
      // Light grey color for separators
      borderBottomColor: colorScheme.colors.card,
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // More padding
      padding: 15,
    },
    profileActionsText: {
      // Slightly larger font size
      fontSize: 18,
      // Dark grey for text
      color: colorScheme.colors.text,
    },
    buttonIcon: {
      height: 27,
      width: 27,
      marginRight: 20,
      color: colorScheme.colors.button,
    },
  });
