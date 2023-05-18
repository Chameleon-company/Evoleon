// Importing necessary libraries and components
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { HelpAndSupportPageStyle } from "../styles/helpAndSupportStyle";

// Defining the FAQ interface
interface Faq {
  question: string;
  answer: string[];
}

// HelpAndSupport component
const HelpAndSupport: React.FC = () => {
  // Initialize FAQs
  const [faqs, setFaqs] = useState<Faq[]>([
    {
      question: "How far can an EV travel without recharging?",
      answer: [
        "Many EV models sold in Australia can travel over 400km before they need to be recharged.",
        "Please note the battery range figures on the label and Green Vehicle Guide are based on a test performed in controlled conditions. Your battery range will be affected by how you use your vehicle, including:",
        "- Your vehicle's overall weight",
        "- The use of accessories such as heating or air-conditioning",
        "- The technique of accelerating and braking (many electric cars have regenerative braking to help charge your vehicle when you are slowing down).",
      ],
    },
    {
      question: "How long does it take to charge an EV?",
      answer: [
        "Level 1 chargers are intended for overnight stops, typically 14-16 hours for an 80 percent charge.",
        "Level 2 chargers are for extended stops, typically 3-5 hours.",
        "DC Fact Charging is for quick stops, typically 20-30 minutes for an 80% charge.",
      ],
    },
    {
      question: "What are EV benefits?",
      answer: [
        "Australian drivers travel on average around 33km a day. Given that charging stations are becoming more available, EVs are an increasingly viable and convenient solution in cities, towns and major holiday destinations. There are a range of benefits to driving electric, including:",
        "- Reduced fuel costs and higher efficiency",
        "- Less maintenance",
        "- Fuel security",
        "- Reduced traffic noise",
        "- Air quality improvements",
        "- Good for the environment",
      ],
    },
    {
      question: "How do EV charging stations work?",
      answer: [
        "- Identify yourself to the charging station through the Evoleon mobile app",
        "- Plug the charging cable into the vehicle and the station. Some stations come with built-in cables, in which case you can plug that directly into your car.",
        "- Charge. You should see confirmation through your vehicle’s display as well as the charger’s indicator lights.",
        "- Once charged, you can end the charging session via the station or mobile app, depending on how you started it.",
      ],
    },
  ]);

  // State to hold the currently selected FAQ
  const [selectedFaq, setSelectedFaq] = useState<Faq | null>(null);

  // Function to handle FAQ selection
  const handleFaqSelection = (faq: Faq) => {
    setSelectedFaq(selectedFaq === faq ? null : faq);
  };

  // Function to render an FAQ item
  const renderFaq = (faq: Faq) => {
    const isSelected = faq === selectedFaq;
    const chevronIcon = isSelected
      ? require("../assets/chevron-icon-up.png")
      : require("../assets/chevron-icon-down.png");

    return (
      <View key={faq.question} style={HelpAndSupportPageStyle.faqContainer}>
        <TouchableOpacity onPress={() => handleFaqSelection(faq)}>
          <View style={HelpAndSupportPageStyle.questionContainer}>
            <Text style={HelpAndSupportPageStyle.questionText}>{faq.question}</Text>
            <Image style={HelpAndSupportPageStyle.icon} source={chevronIcon} />
          </View>
          {isSelected && (
            <View style={HelpAndSupportPageStyle.answerContainer}>
              {faq.answer.map((answer, index) => (
                <Text
                  key={`${faq.question}-answer-${index}`}
                  style={HelpAndSupportPageStyle.answerText}
                >
                  {answer}
                </Text>
              ))}
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  // Render the HelpAndSupport component
  return (
    <View style={HelpAndSupportPageStyle.container}>
      <Text style={HelpAndSupportPageStyle.title}>Frequently Asked Questions</Text>
      <ScrollView style={HelpAndSupportPageStyle.faqsContainer}>
        {faqs.map(renderFaq)}
      </ScrollView>
    </View>
  );
};

export default HelpAndSupport;
