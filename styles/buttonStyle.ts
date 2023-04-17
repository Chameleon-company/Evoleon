import { StyleSheet } from 'react-native';

export const ButtonStyle = StyleSheet.create({
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 50,
    backgroundColor: '#294E4B',
    marginBottom: 40,
  },
  
  Text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  LoginLink: {
    color: '#294E4B',
    fontWeight: 'bold'
  }
  
});