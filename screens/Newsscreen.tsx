import * as React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, View, useTheme } from '../components/Themed';
import { createButtonStyle } from '../styles/buttonStyle';
import { createAboutStyle } from '../styles/aboutStyle';
import { createNewsStyle } from "../styles/newsStyle";

function Newsscreen() {
  const navigation = useNavigation();
  const colorScheme = useTheme();

  const ButtonStyle = createButtonStyle(colorScheme);
  const AboutStyle = createAboutStyle(colorScheme);
  const NewsStyle = createNewsStyle(colorScheme);

  return (
    <SafeAreaView style={AboutStyle.container}>
      <ScrollView style={AboutStyle.scrollView}>
        <View style={AboutStyle.inputView}>
          <Text style={NewsStyle.pageTitle}>EV News</Text>
          <View style={NewsStyle.Centered}>
            <Image style={NewsStyle.NewsImage} source={require('../assets/images/EXnews1.jpg')} />
          </View>


          <Text style={NewsStyle.sectionHeading}>Example EV news 1</Text>
          <Text style={NewsStyle.textParagraph}>
            Example news details
            Example news details
            Example news details
            Example news details
          </Text>
          <Text style={NewsStyle.underlinetext}>
            More details...
          </Text>
          <View style={NewsStyle.Centered}>
            <Image style={NewsStyle.NewsImage} source={require('../assets/images/EXnews2.jpg')} />
          </View>


          <Text style={NewsStyle.sectionHeading}>Example EV news 2</Text>
          <Text style={NewsStyle.textParagraph}>
            Example news details
            Example news details
            Example news details
            Example news details
          </Text>
          <Text style={NewsStyle.underlinetext}>
            More details...
          </Text>
          <View style={NewsStyle.Centered}>
            <Image style={NewsStyle.NewsImage} source={require('../assets/images/EXnews3.jpg')} />
          </View>


          <Text style={NewsStyle.sectionHeading}>Example EV news 3</Text>
          <Text style={NewsStyle.textParagraph}>
            Example news details
            Example news details
            Example news details
            Example news details
          </Text>
          <Text style={NewsStyle.underlinetext}>
            More details...
          </Text>
          <View style={NewsStyle.Centered}>
            <Image style={NewsStyle.NewsImage} source={require('../assets/images/EXnews4.jpg')} />
          </View>


          <Text style={NewsStyle.sectionHeading}>Example EV news 4</Text>
          <Text style={NewsStyle.textParagraph}>
            Example news details
            Example news details
            Example news details
            Example news details
          </Text>
          <Text style={NewsStyle.underlinetext}>
            More details...
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[{ marginTop: 20 }, ButtonStyle.Button]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={ButtonStyle.Text}>{'Back'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Newsscreen;
