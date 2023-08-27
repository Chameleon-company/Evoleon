import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const Color = {
  APPHEADER: '#00A688',
  BUTTONCOLOR: '#4cB166',

  light: {
    Text: '#000000cc',
    BACKGROUND: '#E9ECE6',
    BUTTONCOLOR: '#00A688',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    Text: '#ffffffcc',
    BACKGROUND: '#000',
    BUTTONCOLOR: '#002d00',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export const EvoleonLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4cB166',
    secondary: '#2DC842',
    background: '#F7F7FF',
    button: '#4cB166',
    card: '#fff',
    text: '#070600',
    border: '#000',
    false: '#828A9B',
    true: '#E9ECE6',
    notification: '#694fad',
    navTabBar: '#4cB166', // Custom color for tabBar
  },
};

export const EvoleonDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    tabBar: '#324d4a', // Custom color for tabBar in dark theme
    button: '#294e4b',
  },
};

// Export the Color object for reference
export default Color;
