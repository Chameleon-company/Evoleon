import { StyleSheet } from 'react-native';

export const createHelpAndSupportPageStyle = (colorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme.colors.background,
      padding: 20, // Add padding to the container
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      marginVertical: 20,
    },
    scrollContainer: {
      flexGrow: 1, // Allow the content to grow and scroll
    },
    faqContainer: {
      width: '100%', // Adjust the width to 100% for full screen width
      marginBottom: 20,
    },
    questionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colorScheme.colors.background,
      padding: 10,
      borderRadius: 5,
    },
    questionText: {
      fontWeight: 'bold',
      fontSize: 16,
      flex: 1,
    },
    answerContainer: {
      backgroundColor: colorScheme.colors.background,
      padding: 10,
      marginTop: 10,
      borderRadius: 5,
    },
    answerText: {
      fontSize: 16,
    },
    icon: {
      marginLeft: 10,
      width: 16, 
      height: 16,
    },
    faqsContainer: {
      alignItems: 'center',
    },
  });
