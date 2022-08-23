import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import * as React from "react";

import DatabaseScreen from "../screens/DatabaseScreen";
import FileSystemScreen from "../screens/FileSystemScreen";
import ClientsScreen from "../screens/ClientsScreen";
import LoginScreen from "../screens/Login-screen";
import AuthenticateScreen from '../screens/AuthenticateScreen';
import SignupScreen from '../screens/SignupScreen';

import {
  DrawerParamList,
  DatabaseParamList,
  FileSystemParamList,
  ClientsParamList,
  LoginParamList,
  AuthenticateParamList, 
  SignupParamList
} from "../types";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Database" drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={() => 
            //To do: update to check if user is logged in and change text accordingly 
            props.navigation.navigate("Authenticate") }/>
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Database" component={DatabaseNavigator} />
      <Drawer.Screen name="FileSystem" component={FileSystemNavigator} />
      <Drawer.Screen name="Clients" component={ClientsNavigator} />
      <Drawer.Screen name="Login" component={LoginNavigator} />
      <Drawer.Screen name="Authenticate" component={AuthenticateNavigator}/>
      <Drawer.Screen name="Signup" component={SignupNavigator}
      />  
    </Drawer.Navigator>
  );
}

const DatabaseStack = createStackNavigator<DatabaseParamList>();

function DatabaseNavigator() {
  return (
    <DatabaseStack.Navigator>
      <DatabaseStack.Screen name="DatabaseScreen" component={DatabaseScreen} />
    </DatabaseStack.Navigator>
  );
}

const FileSystemStack = createStackNavigator<FileSystemParamList>();

function FileSystemNavigator() {
  return (
    <FileSystemStack.Navigator>
      <FileSystemStack.Screen
        name="FileSystemScreen"
        component={FileSystemScreen}
      />
    </FileSystemStack.Navigator>
  );
}

const ClientsStack = createStackNavigator<ClientsParamList>();

function ClientsNavigator() {
  return (
    <ClientsStack.Navigator>
      <ClientsStack.Screen name="ClientsScreen" component={ClientsScreen} />
    </ClientsStack.Navigator>
  );
}

const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login/Sign Up" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const AuthenticateStack = createStackNavigator<AuthenticateParamList>();

function AuthenticateNavigator() {
  return (
    <AuthenticateStack.Navigator>
      <AuthenticateStack.Screen
        name="AuthenticateScreen"
        component={AuthenticateScreen}
      />
    </AuthenticateStack.Navigator>
  )
}


const SignupStack = createStackNavigator<SignupParamList>();

function SignupNavigator() {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        name="SignupScreen"
        component={SignupScreen}
      />
    </SignupStack.Navigator>
  )
}
