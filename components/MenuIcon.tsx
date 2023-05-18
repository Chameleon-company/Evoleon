import React, { useCallback } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from './Themed';
import { DrawerActions, useNavigation } from '@react-navigation/native';

// The MenuIcon component creates a button in the form of a menu icon. 
// When this button is pressed, the navigation drawer is opened.
const MenuIcon = () => {
  const navigation = useNavigation();

  // openDrawer dispatches the openDrawer action when called. 
  // It is memoized using useCallback to avoid unnecessary re-renders.
  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Feather name="menu" size={24} style={styles.menuIcon}/>
    </TouchableOpacity>
  );
};

// Stylesheet for the menu icon
const styles = StyleSheet.create({
  menuIcon: {
    marginLeft: 25,
  },
});

export default MenuIcon;
