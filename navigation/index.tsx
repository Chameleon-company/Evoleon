// React and React Native imports
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

// React Navigation imports
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen and other components imports
import NotFoundScreen from '../screens/NotFoundScreen';
import DrawerNavigator from './DrawerNavigator';

// Utility and configuration imports
import LinkingConfiguration from './LinkingConfiguration';

// Type imports
import { RootStackParamList } from '../types';

// Root navigator for the application.
// This helps in displaying modals or screens on top of all other content.
// To learn more: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={DrawerNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

// Main navigation component for the application.
// It integrates linking configuration and themes for light/dark modes.
// To get started with React Navigation, refer "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
