import * as React from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, View, getTheme } from '../components/Themed';
import { createButtonStyle } from '../styles/buttonStyle';

const windowHeight = Dimensions.get('window').height;

function PrivacyPolicyScreen() {
  const navigation = useNavigation();
  const colorScheme = getTheme();

  const ButtonStyle = createButtonStyle(colorScheme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.inputView}>
          <Text style={styles.pageTitle}>Evoleon App Privacy Policy</Text>

          <Text style={styles.sectionHeading}>1. We respect your privacy</Text>
          <Text style={styles.textParagraph}>
            (a) Chameleon respects your right to privacy and is committed to safeguarding the privacy of our customers
            and software application users. We adhere to the National Privacy Principles established by the Privacy Act
            1988 (Cth). This policy sets out how we collect and treat your personal information.
          </Text>
          <Text style={styles.textParagraph}>
            (b) "Personal information" is information we hold which is identifiable as being about you.
          </Text>
          <Text style={styles.sectionHeading}>2. Collection of personal information</Text>
          <Text style={styles.textParagraph}>
            (a) Chameleon will, from time to time, receive and store personal information you enter onto our software
            application Evoleon, provide to us directly or give to us in other forms.
          </Text>
          <Text style={styles.textParagraph}>
            (b) You may provide basic information such as your name, phone number, address and email address to enable
            us to send information, provide updates and process your product or service order. We may collect additional
            information at other times, including but not limited to, when you provide feedback, when you provide
            information about your personal or business affairs, change your content or email preference, respond to
            surveys and/or promotions, provide financial or credit card information, or communicate with our customer
            support.
          </Text>
          <Text style={styles.textParagraph}>
            (c) Additionally, we may also collect any other information you provide while interacting with us.
          </Text>
          <Text style={styles.sectionHeading}>3. How we collect your personal information</Text>
          <Text style={styles.textParagraph}>
            (a) Chameleon collects personal information from you in a variety of ways, including when you interact with
            us electronically or in person, when you access our software application and when we provide our services to
            you. We may receive personal information from third parties. If we do, we will protect it as set out in this
            Privacy Policy..
          </Text>
          <Text style={styles.sectionHeading}>4. Use of your personal information</Text>
          <Text style={styles.textParagraph}>
            (a) Chameleon may use personal information collected from you to provide you with information, updates and
            our services. We may also make you aware of new and additional products, services and opportunities
            available to you. We may use your personal information to improve our products and services and better
            understand your needs.
          </Text>
          <Text style={styles.textParagraph}>
            (b) The Application may make third party social media features available to its users. We cannot ensure the
            security of any information you choose to make public in a social media feature. Also, we cannot ensure that
            parties who have access to such publicly available information will respect your privacy. Chameleon may
            contact you by a variety of measures including, but not limited to telephone, email, sms or mail.
          </Text>
          <Text style={styles.sectionHeading}>5. Disclosure of your personal information</Text>
          <Text style={styles.textParagraph}>
            (a) We may disclose your personal information to any of our employees, officers, insurers, professional
            advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in
            this Policy. Personal information is only supplied to a third party when it is required for the delivery of
            our services.
          </Text>
          <Text style={styles.textParagraph}>
            (b) We may from time to time need to disclose personal information to comply with a legal requirement, such
            as a law, regulation, court order, subpoena, warrant, in the course of a legal proceeding or in response to
            a law enforcement agency request.
          </Text>
          <Text style={styles.textParagraph}>
            (c) We may also use your personal information to protect the copyright, trademarks, legal rights, property
            or safety of Chameleon, its application, website and customers or third parties.
          </Text>
          <Text style={styles.textParagraph}>
            (d) Information that we collect may from time to time be stored, processed in or transferred between parties
            located in countries outside of Australia
          </Text>
          <Text style={styles.textParagraph}>
            (e) If there is a change of control in our business or a sale or transfer of business assets, we reserve the
            right to transfer to the extent permissible at law our user databases, together with any personal
            information and non-personal information contained in those databases. This information may be disclosed to
            a potential purchaser under an agreement to maintain confidentiality. We would seek to only disclose
            information in good faith and where required by any of the above circumstances.
          </Text>
          <Text style={styles.textParagraph}>
            (f) By providing us with personal information, you consent to the terms of this Privacy Policy and the types
            of disclosure covered by this Policy. Where we disclose your personal information to third parties, we will
            request that the third party follow this Policy regarding handling your personal information.
          </Text>
          <Text style={styles.sectionHeading}>6. Security of your personal information</Text>
          <Text style={styles.textParagraph}>
            (a) Chameleon is committed to ensuring that the information you provide to us is secure. In order to prevent
            unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial
            procedures to safeguard and secure information and protect it from misuse, interference, loss and
            unauthorised access, modification and disclosure.
          </Text>
          <Text style={styles.textParagraph}>
            (b) The transmission and exchange of information is carried out at your own risk. We cannot guarantee the
            security of any information that you transmit to us, or receive from us. Although we take measures to
            safeguard against unauthorised disclosures of information, we cannot assure you that personal information
            that we collect will not be disclosed in a manner that is inconsistent with this Privacy Policy.
          </Text>
          <Text style={styles.sectionHeading}>7. Access to your personal information</Text>
          <Text style={styles.textParagraph}>
            (a) You may request details of personal information that we hold about you in accordance with the provisions
            of the Privacy Act 1988(Cth). A small administrative fee may be payable for the provision of information. If
            you would like a copy of the information which we hold about you or believe that any information we hold on
            you is inaccurate, out of date, incomplete, irrelevant or misleading, please email us at
            chameleon@deakin.edu.au.
          </Text>
          <Text style={styles.textParagraph}>
            (b) We reserve the right to refuse to provide you with information that we hold about you, in certain
            circumstances set out in the Privacy Act.
          </Text>
          <Text style={styles.sectionHeading}>8. Complaints about privacy</Text>
          <Text style={styles.textParagraph}>
            (a) If you have any complaints about our privacy practices, please feel free to send in details of your
            complaints to 75 Pigdons Road, Waurn Ponds, Victoria, 3216. We take complaints very seriously and will
            respond shortly after receiving written notice of your complaint.
          </Text>
          <Text style={styles.sectionHeading}>9. Opt out right</Text>
          <Text style={styles.textParagraph}>
            (a) You can stop all collection of information by the Application easily by uninstalling the Application.
            You may use the standard uninstall processes as may be available as part of your mobile device or via the
            mobile application marketplace or network. You can also request to opt-out via email, at
            chameleon@deakin.edu.au.
          </Text>
          <Text style={styles.sectionHeading}>10. Changes to Privacy Policy</Text>
          <Text style={styles.textParagraph}>
            (a) Please be aware that we may change this Privacy Policy in the future. We may modify this Policy at any
            time, in our sole discretion and all modifications will be effective immediately upon our posting of the
            modifications on our website or notice board. Please check back from time to time to review our Privacy
            Policy.
          </Text>
          <Text style={styles.sectionHeading}>11. Software Application</Text>
          <Text style={styles.subSectionHeading}>(a) When you use our Application</Text>
          <Text style={styles.textParagraph}>
            When you come to our application we may collect certain information such as mobile unique device ID, the IP
            address of your mobile device, mobile operating system, the type of mobile internet browsers you use, and
            information about the way you use the Application. This information is used in an aggregated manner to
            analyse how people use our site, such that we can improve our service.
          </Text>
          <Text style={styles.subSectionHeading}>(b) Cookies</Text>
          <Text style={styles.textParagraph}>
            We may from time to time use cookies on our software application. Cookies are very small files which a
            website uses to identify you when you come back to the application and to store details about your use of
            the application. Cookies are not malicious programs that access or damage your computer, tablet or
            smartphone. Most devices automatically accept cookies but you can choose to reject cookies by changing your
            devise settings. However, this may prevent you from taking full advantage of our application.
          </Text>
          <Text style={styles.subSectionHeading}>(c) Automatic collection</Text>
          <Text style={styles.textParagraph}>
            The software Application may collect certain information automatically, including, but not limited to, the
            type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device,
            your mobile operating system, the type of mobile Internet browsers you use, and information about the way
            you use the Application.
          </Text>
          <Text style={styles.subSectionHeading}>(d) Third parties</Text>
          <Text style={styles.textParagraph}>
            Our software application may from time to time have links to other applications or websites not owned or
            controlled by us. These links are meant for your convenience only. Links to third party applications and
            websites do not constitute sponsorship or endorsement or approval of these third parties. Please be aware
            that Chameleon is not responsible for the privacy practices of other such applications or websites. We
            encourage our users to be aware, when they leave our application or website, to read the privacy statements
            of each and every application or website that collects personal identifiable information.
          </Text>
          <Text style={styles.subSectionHeading}>(e) Geo-location</Text>
          <Text style={styles.textParagraph}>
            When you visit the mobile application, we may use GPS technology (or other similar technology) to determine
            your current location in order to determine the city you are located within and display a location map with
            relevant advertisements. We will not share your current location with other users or partners.
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9ECE6",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginBottom: 100,
  },
  scrollView: {
    height: windowHeight - 100,
    backgroundColor: "#E9ECE6",
  },
  inputView: {
    backgroundColor: "#E9ECE6",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  pageTitle: {
    backgroundColor: "#E9ECE6",
    margin: 20,
    fontSize: 16,
    textAlign: "center",
  },
  sectionHeading: {
    backgroundColor: "#E9ECE6",
    position: "relative",
    marginBottom: 1,
    marginTop: 4,
    textAlign: "left",
    fontWeight: "bold",
  },
  subSectionHeading: {
    backgroundColor: "#E9ECE6",
    position: "relative",
    marginBottom: 1,
    marginTop: 4,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 11,
  },
  textParagraph: {
    backgroundColor: "#E9ECE6",
    padding: 5,
    marginTop: 0,
    fontSize: 10,
    textAlign: "justify",
  },
});

export default PrivacyPolicyScreen;
