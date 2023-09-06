import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { Text, View, useTheme } from '../components/Themed';
import { Alert, Pressable, TextInput, TouchableOpacity } from 'react-native';

import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { userLogin } from '../web/firebase';

import { createLoginStyle } from '../styles/loginStyle';
import { createButtonStyle } from '../styles/buttonStyle';

export default function LoginScreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  const LoginStyle = createLoginStyle(colorScheme);
  const ButtonStyle = createButtonStyle(colorScheme);

  const [email, onChangeTextEmail] = React.useState('');
  const [password, onChangeTextPassword] = React.useState('');

  return (
    <SafeAreaView style={LoginStyle.content}>
      <View style={LoginStyle.content}>
        <Text style={LoginStyle.text}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
        >
          <Text style={ButtonStyle.signupLink}>Sign Up</Text>
        </TouchableOpacity>

        <View style={LoginStyle.inputView}>
          <TextInput
            style={LoginStyle.input}
            keyboardType="email-address"
            onChangeText={onChangeTextEmail}
            value={email}
            placeholderTextColor="grey"
            placeholder="Email"
          />
          <TextInput
            style={LoginStyle.input}
            secureTextEntry={true}
            onChangeText={onChangeTextPassword}
            value={password}
            placeholderTextColor="grey"
            placeholder="Password"
          />

          <TouchableOpacity
            style={ButtonStyle.forgotPassButton}
            onPress={() => {
              navigation.navigate('ForgotPasswordScreen');
            }}
          >
            <Text style={ButtonStyle.signupLink}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ButtonStyle.button}
            onPress={async () => {
              const { success, error } = await userLogin(email, password);
              if (success) {
                navigation.navigate('Database');
              } else {
                Alert.alert('Login Error', error.code === 'auth/wrong-password' ? 'Incorrect password' : error.message);
              }
            }}
          >
            <Text style={ButtonStyle.Text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ButtonStyle.cancelButton}
            onPress={() => {
              navigation.navigate('Authenticate');
            }}
          >
            <Text style={ButtonStyle.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
