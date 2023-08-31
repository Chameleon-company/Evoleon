import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { Text, View, useTheme } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { useEffect, useState } from 'react';
import main from '../styles/main';
import { Alert, Pressable, TextInput, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { userPasswordResetAuth } from '../web/firebase';
import { getuserIsAuthenticated } from '../web/firebase';

import { createButtonStyle } from '../styles/buttonStyle';
import { createLoginStyle } from '../styles/loginStyle';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  const LoginStyle = createLoginStyle(colorScheme);
  const ButtonStyle = createButtonStyle(colorScheme);

  const [email, onChangeTextEmail] = React.useState('');
  const [password, onChangeTextPassword] = React.useState('');

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
