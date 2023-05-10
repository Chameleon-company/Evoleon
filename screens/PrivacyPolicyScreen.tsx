import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from "../components/Themed";
import { SignUpScreenStyle } from "../styles/signUpStyle";
import { ButtonStyle } from '../styles/buttonStyle';


function PrivacyPolicyScreen() {
    const navigation = useNavigation();
    const backButton = 'Back';
    
    return (
        <SafeAreaView style={SignUpScreenStyle.content}>
            <View style={SignUpScreenStyle.inputView}>
            
                <TouchableOpacity style={ButtonStyle.Button} onPress={() => {
                        navigation.navigate("About");
                    }}>
                    <Text style={ButtonStyle.Text}>{backButton}</Text>
                </TouchableOpacity>
    
                <Text style={styles.textBody}>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.


                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that 
                    it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like 
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will 
                    uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, 
                    sometimes on purpose (injected humour and the like).
                </Text>
                
                
            </View>
        </SafeAreaView>
    )
    
}

export const styles = StyleSheet.create({
    returnButton: {
        position: 'absolute',
        top: 10,
    },
    textBody: {
        padding: 5,
        marginTop:20,
      },
  })
  
  export default PrivacyPolicyScreen;