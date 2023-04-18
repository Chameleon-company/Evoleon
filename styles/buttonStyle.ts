import { StyleSheet } from 'react-native';

export const ButtonStyle = StyleSheet.create({  // export const ButtonStyle = StyleSheet.create({ // Replaced with export default. 
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 90,
    borderRadius: 50,
    backgroundColor: '#294E4B',
    marginBottom: 40,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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