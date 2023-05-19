import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

/**
 * useColorScheme wrapper that always returns a non-nullable ColorSchemeName value.
 * Although the built-in useColorScheme type suggests it can return null, it always
 * returns either 'light' or 'dark' in practice. By asserting the type as 
 * NonNullable<ColorSchemeName>, we can simplify working with the returned value.
 *
 * @returns {NonNullable<ColorSchemeName>} - 'light' or 'dark'
 */
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
