import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { Image ,Button,Alert} from 'react-native';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';
import main from '../styles/main';

export default function ClientsScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  });

  return (
    
    <View >
      <Image 
      style ={{
      
        padding: 30,
        margin: 80,
        borderTopRightRadius: 12,
        height:100,
      width:200,
      resizeMode: 'contain'
      }}source={ require("../assets/EvoleonFinal.png")}/>
      
      <Button 
        title="vehicle info"
        onPress={() => Alert.alert('vehicle info')}
      />
      <Button
        title="owner info"
        onPress={() => Alert.alert('owner info')}
      />
      <Button
        title="charging history"
        onPress={() => Alert.alert('charging history')}
      />
      {/* <Text
      
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Vehicle info
      </Text> */}
    </View>
  )
};