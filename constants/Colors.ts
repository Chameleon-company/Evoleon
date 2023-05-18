// Tint colors for light and dark themes
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

// Export default color themes
export default {
  // Light theme colors
  light: {
    text: '#000', // Text color
    background: '#fff', // Background color
    tint: tintColorLight, // Tint color
    tabIconDefault: '#ccc', // Default tab icon color
    tabIconSelected: tintColorLight, // Color for the selected tab icon
  },
  
  // Dark theme colors
  dark: {
    text: '#fff', // Text color
    background: '#000', // Background color
    tint: tintColorDark, // Tint color
    tabIconDefault: '#ccc', // Default tab icon color
    tabIconSelected: tintColorDark, // Color for the selected tab icon
  },
};
