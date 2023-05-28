import * as React from 'react';
import { Text, TextProps } from './Themed';

// MonoText component
// This component extends the Text component from the 'Themed' module,
// applying a specific monospace font ('space-mono') to it.

// Props:
// All properties of the Text component from 'Themed' module can be passed to this component.
export function MonoText({style, ...props}: TextProps) {
  // The spread operator '...' is used to pass through any props received.
  // In case the 'style' prop is passed, it will be combined with the default font style.
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
}
