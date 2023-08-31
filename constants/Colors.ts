import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

/* FIXME: This has been superceded by the Evoleon light and dark themes below. 
The themed components should be updated to use these instead.
*/
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
  // This is the default theme used when device is set to light mode
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
    navTabBar: '#fff',
  },
};

export const EvoleonDarkTheme = {
  // These colour schemes are used when device is set to dark mode
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#3A804E',
    secondary: '#1E9D32',
    background: '#0E0E17',
    button: '#3A804E',
    card: '#1A1A1A',
    text: '#EAEAEA',
    border: '#FFFFFF',
    false: '#626C7D',
    true: '#C2C4BD',
    notification: '#472B87',
    navTabBar: '#1A1A1A',
  },
};

// Export the Color object for reference
export default Color;
