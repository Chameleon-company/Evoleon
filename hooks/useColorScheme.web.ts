/**
 * A mock function to return the color scheme as 'light'. 
 * The useColorScheme hook from react-native is not currently supported on web.
 * If you need theme support on web, consider replacing this with react-native-appearance.
 *
 * @returns {string} - The string 'light'.
 */
export default function useColorScheme() {
  // Currently, useColorScheme from react-native does not support web.
  // You can replace this with react-native-appearance if you would like theme support on web.
  return 'light';
}
