import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {

    return (
      <SafeAreaProvider>
        <Navigation colorScheme={useColorScheme()} />        
        <StatusBar />
      </SafeAreaProvider>
    );

}
