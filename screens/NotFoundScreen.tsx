// Importing necessary libraries and components
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

// Importing types
import { RootStackParamList } from '../types';

// Type for navigation props
type NotFoundScreenProps = StackScreenProps<RootStackParamList, 'NotFound'>;

// NotFoundScreen Component
const NotFoundScreen: React.FC<NotFoundScreenProps> = ({ navigation }) => {
  // Function to navigate to root screen
  const navigateToRoot = () => {
    navigation.replace('Root');
  }

  // Render NotFoundScreen Component
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={navigateToRoot} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for NotFoundScreen Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default NotFoundScreen;
