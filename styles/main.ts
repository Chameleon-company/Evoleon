// Import StyleSheet from 'react-native'
import { StyleSheet } from 'react-native';

// Create and export styles
export default StyleSheet.create({
  // Style for a centered layout
  centered: {
    backgroundColor: '#E9ECE6', // Setting the background color
    flex: 1, // Allows the component to expand and take available space
    justifyContent: 'center', // Aligns children vertically in the middle
    alignItems: 'center' // Aligns children horizontally in the middle
  }
});
