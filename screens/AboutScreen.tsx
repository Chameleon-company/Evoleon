// React imports.
import { useEffect } from "react";

// React Native imports.
import { TouchableOpacity, Alert } from "react-native";

// Navigation imports.
import { useNavigation, StackHeaderLeftButtonProps } from "@react-navigation/native";

// Themed component imports.
import { Text, View } from "../components/Themed";

// Custom component imports.
import MenuIcon from "../components/MenuIcon";

// Style imports.
import { AboutStyle } from "../styles/aboutStyle";
import { ButtonStyle } from "../styles/buttonStyle";

function AboutScreen() {
  const navigation = useNavigation();
  const EvoleonAppDeets = require("../app.json");
  const deviceAppVersion = "Pickles";
  const upDateButton = "     Update     ";
  const termsButton = " Ts & Cs ";
  const privacyButton = "Privacy Policy";
  const clearCache = " Clear Cache ";

  // A place holder alert to add the clear cache functionality to.
  const clearCacheAlert = () =>
    Alert.alert("Confirmation Required", "Press OK to clear the cache.", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={AboutStyle.centered}>
      <Text style={AboutStyle.currentVersion} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        App Version: {deviceAppVersion}{" "}
      </Text>
      <Text style={AboutStyle.updateVersion} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        Version Available: {EvoleonAppDeets.expo.version}{" "}
      </Text>
      <View style={AboutStyle.updateButton}>
        <TouchableOpacity style={ButtonStyle.Button}>
          <Text style={ButtonStyle.Text}>{upDateButton}</Text>
        </TouchableOpacity>
      </View>
      <View style={AboutStyle.termsButton}>
        <TouchableOpacity
          style={ButtonStyle.Button}
          onPress={() => {
            navigation.navigate("PrivacyPolicy");
          }}>
          <Text style={ButtonStyle.Text}>{privacyButton}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ButtonStyle.Button}
          onPress={() => {
            navigation.navigate("TermsAndConditionsScreen");
          }}>
          <Text style={ButtonStyle.Text}>{termsButton}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ButtonStyle.Button} onPress={clearCacheAlert}>
          <Text style={ButtonStyle.Text}>{clearCache}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ marginTop: 20 }, ButtonStyle.Button]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={ButtonStyle.Text}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AboutScreen;
