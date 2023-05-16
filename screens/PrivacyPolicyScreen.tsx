import * as React from "react";
import {StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {Text, View} from "../components/Themed";
import {ButtonStyle} from "../styles/buttonStyle";

const windowHeight = Dimensions.get("window").height;

function PrivacyPolicyScreen() {
    const navigation = useNavigation();
    const backButton = "Back";

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.inputView}>
                    <Text style={styles.pageTitle}>Evoleon App Privacy Policy</Text>

                    <Text style={styles.sectionHeading}>1. We respect your privacy</Text>
                    <Text style={styles.textParagraph}>
                        (a) Chameleon respects your right to privacy and is committed to safeguarding the privacy of our
                        customers and software application users. We adhere to the National Privacy Principles
                        established by the Privacy Act 1988 (Cth). This policy sets out how we collect and treat your
                        personal information.
                    </Text>
                    <Text style={styles.textParagraph}>
                        (b) "Personal information" is information we hold which is identifiable as being about you.
                    </Text>
                    <Text style={styles.sectionHeading}>2. Collection of personal information</Text>
                    <Text style={styles.textParagraph}>
                        (a) Chameleon will, from time to time, receive and store personal information you enter onto our
                        software application Evoleon, provide to us directly or give to us in other forms.
                    </Text>
                    <Text style={styles.textParagraph}>
                        (b) You may provide basic information such as your name, phone number, address and email address
                        to enable us to send information, provide updates and process your product or service order. We
                        may collect additional information at other times, including but not limited to, when you
                        provide feedback, when you provide information about your personal or business affairs, change
                        your content or email preference, respond to surveys and/or promotions, provide financial or
                        credit card information, or communicate with our customer support.
                    </Text>
                    <Text style={styles.textParagraph}>
                        (c) Additionally, we may also collect any other information you provide while interacting with
                        us.
                    </Text>
                    <Text style={styles.sectionHeading}>3. How we collect your personal information</Text>
                    <Text style={styles.textParagraph}>
                        (a) Chameleon collects personal information from you in a variety of ways, including when you
                        interact with us electronically or in person, when you access our software application and when
                        we provide our services to you. We may receive personal information from third parties. If we
                        do, we will protect it as set out in this Privacy Policy..
                    </Text>
                    <Text style={styles.sectionHeading}>4. Use of your personal information</Text>
                    <Text style={styles.textParagraph}>
                        (a) Chameleon may use personal information collected from you to provide you with information,
                        updates and our services. We may also make you aware of new and additional products, services
                        and opportunities available to you. We may use your personal information to improve our products
                        and services and better understand your needs.
                    </Text>
                    <Text style={styles.textParagraph}>
                        (b) The Application may make third party social media features available to its users. We cannot
                        ensure the security of any information you choose to make public in a social media feature.
                        Also, we cannot ensure that parties who have access to such publicly available information will
                        respect your privacy. Chameleon may contact you by a variety of measures including, but not
                        limited to telephone, email, sms or mail.
                    </Text>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={[{marginTop: 20}, ButtonStyle.Button]}
                onPress={() => {
                    navigation.goBack();
                }}>
                <Text style={ButtonStyle.Text}>{backButton}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E9ECE6',
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        height: windowHeight - 100,
        backgroundColor: '#E9ECE6'
    },
    inputView: {
        backgroundColor: '#E9ECE6',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    pageTitle: {
        backgroundColor: '#E9ECE6',
        margin: 20,
        fontSize: 16,
        textAlign: "center",
    },
    sectionHeading: {
        backgroundColor: '#E9ECE6',
        position: "relative",
        marginBottom: 1,
        marginTop: 4,
        textAlign: "left",
        fontWeight: "bold",
    },
    textParagraph: {
        backgroundColor: '#E9ECE6',
        padding: 5,
        marginTop: 0,
        textAlign: "justify",
    },
});

export default PrivacyPolicyScreen;
