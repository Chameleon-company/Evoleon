import { StyleSheet } from 'react-native';

// StyleSheet for the button components
export const ButtonStyle = StyleSheet.create({
  // Standard button style
  Button: {
    alignItems: 'center', // Align the content of the button in the center (horizontal alignment)
    justifyContent: 'center', // Center the content of the button vertically
    paddingVertical: 12, // Add vertical padding
    borderRadius: 50, // Round the corners
    backgroundColor: '#294E4B', // Set the background color
    width: 'auto', // Automatically determine the width based on the content and padding
    minWidth: 300, // But also ensure that it has a minimum width
    marginBottom: 10, // Add a margin at the bottom
  },

  // Style for the back button
  BackButton: {
    alignItems: 'center', // Align the content of the button in the center (horizontal alignment)
    justifyContent: 'center', // Center the content of the button vertically
    paddingVertical: 12, // Add vertical padding
    borderRadius: 50, // Round the corners
    backgroundColor: '#294E4B', // Set the background color
    width: 'auto', // Automatically determine the width based on the content and padding
    minWidth: 300, // But also ensure that it has a minimum width
    marginBottom: 10, // Add a margin at the bottom
    marginTop: 30, // Add a margin at the top
  },

  // Style for the text in the button
  Text: {
    fontSize: 16, // Set the font size
    lineHeight: 21, // Set the line height
    fontWeight: 'bold', // Make the font bold
    letterSpacing: 0.25, // Increase the space between each letter
    color: 'white', // Set the text color
  },

  // Style for the login link
  LoginLink: {
    color: '#294E4B', // Set the link color
    fontWeight: 'bold', // Make the link bold
  },
});
