// React Native imports.
import * as React from 'react';

// Themed component imports.
import { Text, View, useTheme } from '../components/Themed';

// Style imports.
import { createElementPostionStyle } from '../styles/elementPositionStyle';
import { createTextStyle } from '../styles/textStyle';

export default function FileSystemScreen() {
  const ColorScheme = useTheme();
  const ElementPostionStyle = createElementPostionStyle(ColorScheme);
  const TextStyle = createTextStyle(ColorScheme);

  return (
    <View style={ElementPostionStyle.centered}>
      <Text style={TextStyle.themeText}>This is FileSystem Screen. This pages purpose needs to be investigated.</Text>
    </View>
  );
}
