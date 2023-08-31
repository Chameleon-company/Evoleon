import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import { EvoleonLightTheme, EvoleonDarkTheme, Color } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof EvoleonLightTheme & keyof typeof EvoleonDarkTheme
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Color[theme][colorName];
  }
}

export function useTheme() {
  const scheme = useColorScheme();
  // This allows for the system to change the theme based on the device settings.
  return scheme === 'dark' ? EvoleonDarkTheme : EvoleonLightTheme;
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type DefaultIconProps = {
  name: string;
  size: number;
  style: object | [object];
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type IconProps = ThemeProps & DefaultIconProps;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}


