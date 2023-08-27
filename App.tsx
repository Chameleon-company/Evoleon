import React from 'react';
import { Text, View, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screen imports.
import AuthenticateScreen from './screens/AuthenticateScreen';
import ClientsScreen from './screens/ClientsScreen';
import DatabaseScreen from './screens/DatabaseScreen';
import FileSystemScreen from './screens/FileSystemScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import TermsAndConditionsScreen from './screens/TermsAndConditionsScreen';
import UpdateUserDetailsScreen from './screens/UpdateUserDetailsScreen';
import SignupScreen from './screens/SignupScreen';
import AboutScreen from './screens/AboutScreen';

// For the icons.
import { Entypo } from '@expo/vector-icons';

// Colour imports
import { getTheme } from './components/Themed';
import { EvoleonLightTheme, EvoleonDarkTheme } from './constants/Colors';

const Tab = createBottomTabNavigator();

export default function App() {
  scheme = useColorScheme();
  theme = getTheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? EvoleonDarkTheme : EvoleonLightTheme}>
      <SafeAreaProvider>
        <StatusBar barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'} />
        <Tab.Navigator
          initialRouteName="Authenticate"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              // The icons are set out like this so that if we want we can change the "focused" icon to be something different
              // At the moment if the icon is focused it's a darker color than if it's not focused.
              switch (route.name) {
                case 'Map':
                  iconName = focused ? 'location-pin' : 'location-pin';
                  break;
                case 'Authenticate':
                  iconName = focused ? 'login' : 'login';
                  break;
                case 'FileSystemScreen':
                  iconName = focused ? 'folder' : 'folder';
                  break;
                case 'AboutScreen':
                  iconName = focused ? 'info' : 'info';
                  break;
                case 'ClientsScreen':
                  iconName = focused ? 'users' : 'users';
                  break;
                default:
                  iconName = 'air';
                  break;
              }

              return <Entypo name={iconName} size={size} color={color} />;
            },
            headerShown: true,
            tabBarStyle: {
              height: 80,
              paddingHorizontal: 5,
              paddingTop: 0,
              backgroundColor: theme.colors.tabBar,
              position: 'absolute',
              borderTopWidth: 0,
            },
          })}
        >
          {/* Entries that are displayed on the bottom bar */}
          <Tab.Screen name="Map" component={DatabaseScreen} />
          <Tab.Screen name="Authenticate" component={AuthenticateScreen} />
          <Tab.Screen name="FileSystemScreen" component={FileSystemScreen} />
          <Tab.Screen name="AboutScreen" component={AboutScreen} />
          <Tab.Screen name="ClientsScreen" component={ClientsScreen} />
          {/* The next tabs are hidden from selection */}
          {/* Note: If you are implementing a new page you must put the entry here so it's within the possible navigation boundaries.
           Adding the blank view tag here hides it from the menu but it's required that new pages be added here.  */}
          <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarButton: () => <View></View> }} />
          <Tab.Screen name="Signup" component={SignupScreen} options={{ tabBarButton: () => <View></View> }} />
          <Tab.Screen name="About" component={AboutScreen} options={{ tabBarButton: () => <View></View> }} />
          <Tab.Screen
            name="Update Details"
            component={UpdateUserDetailsScreen}
            options={{ tabBarButton: () => <View></View> }}
          />
          <Tab.Screen
            name="TermsAndConditionsScreen"
            component={TermsAndConditionsScreen}
            options={{ tabBarButton: () => <View></View> }}
          />
          <Tab.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicyScreen}
            options={{ tabBarButton: () => <View></View> }}
          />
          <Tab.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
            options={{ tabBarButton: () => <View></View> }}
          />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
