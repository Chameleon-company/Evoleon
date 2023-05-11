import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { HelpAndSupportPageStyle } from "../styles/helpAndSupportStyle";

interface Faq {
  question: string;
  answer: string;
}

const HelpAndSupport = () => {
  const [faqs, setFaqs] = useState<Faq[]>([
    {
      question: "How far ?",
      answer:
        " EV charging plugs and sockets vary depending on the vehicle brand,charging level,and manufacturing country.AC Charging Plugs"
    },
    {
      question: "How far can I drive on a single charge?",
      answer:
        "The driving range on a single charge depends on the make and model of the electric vehicle. Consult your vehicle's manual or check online for more information."
    },
    {
      question: "What is the difference between a hybrid and an electric vehicle?",
      answer:
        "A hybrid vehicle runs on both gasoline and electricity, while an electric vehicle runs solely on electricity. Electric vehicles produce no emissions and have lower operating costs, but may have shorter driving ranges and longer charging times than hybrids."
    },
    {
      question: "What is the difference between a hybrid and an electric vehicle?",
      answer:
        "A hybrid vehicle runs on both gasoline and electricity, while an electric vehicle runs solely on electricity. Electric vehicles produce no emissions and have lower operating costs, but may have shorter driving ranges and longer charging times than hybrids."
    }
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
    const chevronIcon = isSelected ? require('../assets/chevron-icon-up.png') : require('../assets/chevron-icon-down.png');

    return (
      <View key={faq.question} style={HelpAndSupportPageStyle.faqContainer}>
        <TouchableOpacity onPress={() => toggleFaq(faq)}>
          <View style={HelpAndSupportPageStyle.questionContainer}>
            <Text style={HelpAndSupportPageStyle.questionText}>{faq.question}</Text>
            <Image
              style={HelpAndSupportPageStyle.icon}
              source={chevronIcon}
            />
          </View>
        </TouchableOpacity>
        {isSelected && (
          <View style={HelpAndSupportPageStyle.answerContainer}>
            <Text style={HelpAndSupportPageStyle.answerText}>{faq.answer}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={HelpAndSupportPageStyle.container}>
      <Text style={HelpAndSupportPageStyle.title}>Frequently Asked Questions</Text>
      <View style={HelpAndSupportPageStyle.faqsContainer}>
        {faqs.map((faq) => renderFaq(faq))}
      </View>
    </View>
  );
};

export default HelpAndSupport;
