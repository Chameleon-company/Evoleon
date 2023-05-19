import { StyleSheet } from 'react-native';

// The StyleSheet class creates a JavaScript object for styles that abstracts the underlying implementation.
// The create() function allows you to define your styles in one place, and use it throughout the component.

// Here we're defining a style for the AuthScreen named "AuthScreenStyle"
export const AuthScreenStyle = StyleSheet.create({
  // The "Centered" style is used for centering the content.
  // The 'flex: 1' style makes the element flexible and it will expand to take up all available space in its parent container.
  // The 'justifyContent: center' and 'alignItems: center' are used for centering the element's content both vertically and horizontally.
  // The 'backgroundColor' sets the background color of the element.
  Centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9ECE6',
  },
});
