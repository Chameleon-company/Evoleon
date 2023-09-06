// React Native imports.
import React, { useState } from 'react';
import { Alert, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Firebase imports.
import { userPasswordResetAuth } from '../web/firebase';

// Style imports.
import { createButtonStyle } from '../styles/buttonStyle';
import { createLoginStyle } from '../styles/loginStyle';

// Themed component imports.
import { Text, View, useTheme } from '../components/Themed';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  // Create style imports and pass through ColorScheme hook.
  const LoginStyle = createLoginStyle(colorScheme);
  const ButtonStyle = createButtonStyle(colorScheme);

  const [email, onChangeTextEmail] = React.useState('');

  return (
    <SafeAreaView style={LoginStyle.content}>
      <View style={LoginStyle.inputView}>
        <TextInput
          style={LoginStyle.input}
          keyboardType="email-address"
          onChangeText={onChangeTextEmail}
          value={email}
          placeholderTextColor="grey"
          placeholder="Email"
        />

        {/* Reset button */}
        <TouchableOpacity
          style={ButtonStyle.Button}
          onPress={async () => {
            // Call the userPasswordResetAuth function and await its result
            const { success, error } = await userPasswordResetAuth(email);
            if (!success) {
              // Check the error code and display the appropriate message
              if (error.code === 'auth/invalid-email' || error.code === 'auth/missing-email') {
                Alert.alert('Error', 'Please enter the email');
              } else {
                // If there's an error, display an alert with the error message
                Alert.alert('Incorrect account email', error.message);
              }
            } else {
              // If successful, navigate to the Login screen
              navigation.navigate('Authenticate');
            }
          }}
        >
          <Text style={ButtonStyle.Text}>Reset Password</Text>
        </TouchableOpacity>

        <Pressable
          style={ButtonStyle.cancelButton}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={ButtonStyle.cancelText}>Cancel</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
