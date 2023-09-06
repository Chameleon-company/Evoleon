// React Native imports.
import { TouchableOpacity, Alert } from 'react-native';

// Navigation imports.
import { useNavigation } from '@react-navigation/native';

// Themed component imports.
import { Text, View, useTheme } from '../components/Themed';

// Style imports.
import { createAboutStyle } from '../styles/aboutStyle';
import { createButtonStyle } from '../styles/buttonStyle';
import { createElementPostionStyle } from '../styles/elementPositionStyle';

function AboutScreen() {
  // Retreving the current colour scheme from the Themed component.
  const colorScheme = useTheme();

  const AboutStyle = createAboutStyle(colorScheme);
  const ButtonStyle = createButtonStyle(colorScheme);
  const ElementPostionStyle = createElementPostionStyle(colorScheme);

  const navigation = useNavigation();
  const EvoleonApp = require('../app.json');

  // A place holder alert to add the clear cache functionality to.
  const clearCacheAlert = () =>
    Alert.alert('Confirmation Required', 'Press OK to clear the cache.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <View style={ElementPostionStyle.centered}>
      <Text style={AboutStyle.currentVersion}>App Version: {'Pickles'} </Text>
      <Text style={AboutStyle.updateVersion}>Version Available: {EvoleonApp.expo.version} </Text>
      <View>
        <TouchableOpacity style={ButtonStyle.Button}>
          <Text style={ButtonStyle.Text}>{'Update'}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={ButtonStyle.Button}
          onPress={() => {
            navigation.navigate('PrivacyPolicy');
          }}
        >
          <Text style={ButtonStyle.Text}>{'Privacy Policy'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ButtonStyle.Button}
          onPress={() => {
            navigation.navigate('TermsAndConditionsScreen');
          }}
        >
          <Text style={ButtonStyle.Text}>{'Ts & Cs'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ButtonStyle.Button} onPress={clearCacheAlert}>
          <Text style={ButtonStyle.Text}>{'Clear Cache'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ marginTop: 20 }, ButtonStyle.BackButton]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={ButtonStyle.Text}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AboutScreen;
