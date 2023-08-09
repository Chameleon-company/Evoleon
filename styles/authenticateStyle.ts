import { StyleSheet } from 'react-native';
import Color from '../constants/Colors';

export const AuthScreenStyle = StyleSheet.create({
  Centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BACKGROUND,
  },
  frontPageLogo: {
    width: 200,
    height: 200,
    marginBottom: 125
}
});