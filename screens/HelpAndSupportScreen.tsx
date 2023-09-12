import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { createHelpAndSupportPageStyle } from '../styles/helpAndSupportStyle'; // Import the updated style function
import { createButtonStyle } from '../styles/buttonStyle'; // Import the button style function
import {Color} from '../constants/Colors'

// Define FAQ interface
interface Faq {
  question: string;
  answer: string | string[];
}

const HelpAndSupportScreen = () => {
  const navigation = useNavigation();
  

  // Define FAQ questions and answers
  const [faqs, setFaqs] = useState<Faq[]>([
    {
      question: 'How far can an EV travel without recharging?',
      answer: [
        'Many EV models sold in Australia can travel over 400km before they need to be recharged.',
        'Please note the battery range figures on the label and Green Vehicle Guide are based on a test performed in controlled conditions. Your battery range will be affected by how you use your vehicle, including:',
        '- Your vehicle\'s overall weight',
        '- The use of accessories such as heating or air-conditioning',
        '- The technique of accelerating and braking (many electric cars have regenerative braking to help charge your vehicle when you are slowing down).',
      ],
    },
    // Add other FAQ items here
  ]);
  const colourScheme = Color;

  // Define currently selected FAQ as state and set the initial value to null
  const [selectedFaq, setSelectedFaq] = useState<Faq | null>(null);

  // Function to toggle the FAQ answers
  const toggleFaq = (faq: Faq) => {
    if (selectedFaq === faq) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(faq);
    }
  };

  // Function to render a FAQ
  const renderFaq = (faq: Faq) => {
    const isSelected = faq === selectedFaq;
    const chevronIcon = isSelected
      ? require('../assets/chevron-icon-up.png')
      : require('../assets/chevron-icon-down.png');

    const styles = createHelpAndSupportPageStyle(colourScheme); // Apply the updated styles
    const buttonStyles = createButtonStyle(colourScheme); // Apply the button styles

    return (
      <View key={faq.question} style={styles.faqContainer}>
        <TouchableOpacity onPress={() => toggleFaq(faq)}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{faq.question}</Text>
            <Image style={styles.icon} source={chevronIcon} />
          </View>
          {isSelected && (
            <View style={styles.answerContainer}>
              {Array.isArray(faq.answer) ? (
                faq.answer.map((answer, index) => (
                  <Text
                    key={`${faq.question}-answer-${index}`}
                    style={styles.answerText}
                  >
                    {answer}
                  </Text>
                ))
              ) : (
                <Text style={styles.answerText}>{faq.answer}</Text>
              )}
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const styles = createHelpAndSupportPageStyle(colourScheme); // Apply the updated styles
  const buttonStyles = createButtonStyle(colourScheme); // Apply the button styles

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {faqs.map((faq) => renderFaq(faq))}
      </ScrollView>
      <TouchableOpacity
        style={[
          { marginTop: 20 },
          buttonStyles.Button, // Use the button style here
          styles.backButton,
        ]}
        onPress={() => {
          navigation.goBack(); // Navigating back to the previous screen
        }}
      >
        <Text style={buttonStyles.Text}>Back</Text> {/* Use the button style for text */}
      </TouchableOpacity>
    </View>
  );
};

export default HelpAndSupportScreen;
