import React, { useState } from 'react';
import { TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, View, useTheme } from '../components/Themed';

import { createHelpAndSupportPageStyle } from '../styles/helpAndSupportStyle';
import { createButtonStyle } from '../styles/buttonStyle';

interface Faq {
  question: string;
  answer: string | string[];
}

const HelpAndSupportScreen: React.FC = () => {
  const navigation = useNavigation();
  const colourScheme = useTheme();

  const styles = createHelpAndSupportPageStyle(colourScheme);
  const ButtonStyle = createButtonStyle(colourScheme);

  const [faqs, setFaqs] = useState<Faq[]>([
    {
      question: 'How far can an EV travel without recharging?',
      answer: [
        'Many EV models sold in Australia can travel over 400km before they need to be recharged.',
        'Please note the battery range figures on the label and Green Vehicle Guide are based on a test performed in controlled conditions. Your battery range will be affected by how you use your vehicle, including:',
        "- Your vehicle's overall weight",
        '- The use of accessories such as heating or air-conditioning',
        '- The technique of accelerating and braking (many electric cars have regenerative braking to help charge your vehicle when you are slowing down).',
      ],
    },
    {
      question: 'What are some benefits of EVs?',
      answer: [
        'Australian drivers travel on average around 33km a day. Given that charging stations are becoming more available, EVs are an increasingly viable and convenient solution in cities, towns, and major holiday destinations. There are a range of benefits to driving electric, including:',
        '- Reduced fuel costs and higher efficiency',
        '- Less maintenance',
        '- Fuel security',
        '- Reduced traffic noise',
        '- Air quality improvements',
        '- Good for the environment',
      ],
    },
    {
      question: 'How long does it take to charge an EV?',
      answer: [
        'Level 1 chargers are intended for overnight stops, typically 14-16 hours for an 80 percent charge.',
        'Level 2 chargers are for extended stops, typically 3-5 hours.',
        'DC Fast Charging is for quick stops, typically 20-30 minutes for an 80% charge.',
      ],
    },
    {
      question: 'How do EV charging stations work?',
      answer: [
        '- Identify yourself to the charging station through the Evoleon mobile app',
        '- Plug the charging cable into the vehicle and the station. Some stations come with built-in cables, in which case you can plug that directly into your car.',
        '- Charge. You should see confirmation through the display of your vehicle as well as the indicator lights of the charger.',
        '- Once charged, you can end the charging session via the station or mobile app, depending on how you started it',
      ],
    },
  ]);

  const [selectedFaq, setSelectedFaq] = useState<Faq | null>(null);

  const toggleFaq = (faq: Faq) => {
    if (selectedFaq === faq) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(faq);
    }
  };

  const renderFaq = (faq: Faq) => {
    const isSelected = faq === selectedFaq;
    const chevronIcon = isSelected
      ? require('../assets/chevron-icon-up.png')
      : require('../assets/chevron-icon-down.png');

    return (
      <View key={faq.question} style={styles.faqContainer}>
        <TouchableOpacity onPress={() => toggleFaq(faq)}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {faq.question}
              </Text>
            <Image
              style={[styles.icon]} 
              source={chevronIcon}
            />
          </View>
          {isSelected && (
            <View style={styles.answerContainer}>
              {Array.isArray(faq.answer) ? (
                faq.answer.map((answer) => (
                  <Text key={`${faq.question}-answer-${answer}`} style={styles.answerText}>
                    {answer}
                  </Text>
                ))
              ) : (
                <Text key={`${faq.question}-answer`} style={styles.answerText}>
                  {faq.answer}
                </Text>
              )}
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>{faqs.map((faq) => renderFaq(faq))}</ScrollView>

        <TouchableOpacity
          style={[{ marginTop: 20 }, ButtonStyle.Button]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={ButtonStyle.Text}>Back</Text>
        </TouchableOpacity>
    </View>
  );
};

export default HelpAndSupportScreen;
