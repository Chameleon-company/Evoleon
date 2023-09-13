import React from 'react';
import { View, Text, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createContactUsStyle } from '../styles/contactStyle'; // Importing style function
import { createButtonStyle } from '../styles/buttonStyle';
import { Color } from '../constants/Colors';

const ContactScreen = () => {
  const colorScheme = Color;
  const styles = createContactUsStyle(colorScheme);
  const buttonStyles = createButtonStyle(colorScheme);

  const navigation = useNavigation(); // Initialising navigation

  const handleGoBack = () => {
    navigation.goBack(); // Navigating back to the previous screen
  };

  const openEmail = (emailAddress: string) => {
    Linking.openURL(`mailto:${emailAddress}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      {/* General Inquiries Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General Inquiries</Text>
        <Text style={styles.sectionContent}>For general questions and information:</Text>
        <TouchableOpacity onPress={() => openEmail('evoleonapp@gmail.com')}>
          {/* Email Address for General Inquiries */}
          <Text style={[styles.contactInfo, styles.emailLink]}>evoleonapp@gmail.com</Text>
        </TouchableOpacity>
      </View>

      {/* Customer Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customer Support</Text>
        <Text style={styles.sectionContent}>For customer support and assistance:</Text>
        <TouchableOpacity onPress={() => openEmail('evoleonapp@gmail.com')}>
          {/* Email Address for Customer Support */}
          <Text style={[styles.contactInfo, styles.emailLink]}>evoleonapp@gmail.com</Text>
        </TouchableOpacity>
      </View>
      
      {/* Back Button */}
      <TouchableOpacity
        style={[
          buttonStyles.BackButton, // Applying the button style
        ]}
        onPress={handleGoBack} // Calling the back function on press
      >
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ContactScreen;
