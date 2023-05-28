import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';

// A custom hook that will load all necessary resources and data before rendering the app
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Function to load necessary resources and data
    async function loadResourcesAndDataAsync() {
      try {
        // Prevent the splash screen from auto hiding
        await SplashScreen.preventAutoHideAsync();

        // Load necessary fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // Log the error to console for debugging
        console.warn(e);
        // Note: Consider using an error reporting service or sending the error to your server for better error handling
      } finally {
        // Set the loading state to complete and hide the splash screen
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    // Call the function to load resources and data
    loadResourcesAndDataAsync();
  }, []); // The empty array [] makes sure the effect is only run once at component mount

  // Return the loading state
  return isLoadingComplete;
}
