import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';
import { Feather as DefaultFeather } from '@expo/vector-icons';

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

export function getTheme() {
  const scheme = useColorScheme();
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
}

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

export function Feather(props: IconProps) {
  const { lightColor, darkColor, name, size, style } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultFeather name={name} size={size} color={color} style={style}/>
}
