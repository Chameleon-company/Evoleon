import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import * as React from "react";

import DatabaseScreen from "../screens/DatabaseScreen";
import FileSystemScreen from "../screens/FileSystemScreen";
import ClientsScreen from "../screens/ClientsScreen";
import LoginScreen from "../screens/Login-screen";
import AuthenticateScreen from '../screens/AuthenticateScreen';
import SignupScreen from '../screens/SignupScreen';
import {getSignInSignOutButtonText, signInSignOutButtonPressed} from '../web/firebase' 

import {
  DrawerParamList,
  DatabaseParamList,
  FileSystemParamList,
  ClientsParamList,
  LoginParamList,
  AuthenticateParamList, 
  SignupParamList
} from "../types";
import { color } from "react-native-reanimated";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (

    <Drawer.Navigator initialRouteName="Database" drawerContent={props => {

        const filteredTopLeftMenuItems = {
          ...props,
          state: {
            ...props.state,
            routeNames: props.state.routeNames.filter(
              (routeName) => {
                routeName !== 'Login' && routeName !== 'Signup' && routeName !== 'Authenticate';
              }
            ),
            routes: props.state.routes.filter(
              (route) =>
                route.name !== 'Login' && route.name !== 'Signup' && route.name !== 'Authenticate'
            ),
          },
        };

  
      return (
        <DrawerContentScrollView {...filteredTopLeftMenuItems}>
          <DrawerItemList {...filteredTopLeftMenuItems} />
          <DrawerItem label={getSignInSignOutButtonText()} onPress={() => {
            signInSignOutButtonPressed();
            props.navigation.navigate("Authenticate");
          }
        }/>
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Database" component={DatabaseNavigator}/>
      <Drawer.Screen name="FileSystem" component={FileSystemNavigator} />
      <Drawer.Screen name="Clients" component={ClientsNavigator} />

      {/* <Drawer.Screen
        name="Map"
        component={DatabaseNavigator}/>
      <Drawer.Screen
        name="Saving chart"
        component={FileSystemNavigator}
      />
      <Drawer.Screen
        name="Profile"
  component={ClientsNavigator} >*/ }
      <Drawer.Screen name="Login" component={LoginNavigator} />
      <Drawer.Screen name="Authenticate" component={AuthenticateNavigator}/>
      <Drawer.Screen name="Signup" component={SignupNavigator}/>  


    </Drawer.Navigator>
  );
}

const DatabaseStack = createStackNavigator<DatabaseParamList>();

function DatabaseNavigator() {
  return (
    <DatabaseStack.Navigator>
      <DatabaseStack.Screen
        name="DatabaseScreen"
        component={DatabaseScreen}
        options={{
          headerTitle:'EV database map',
          headerStyle: {
            backgroundColor: '#294E4B',
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}/>
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
        options={{
          headerTitle:'File system',
          headerStyle: {
            backgroundColor: '#294E4B',
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}/>
    </FileSystemStack.Navigator>
  );
}

const ClientsStack = createStackNavigator<ClientsParamList>();

function ClientsNavigator() {
  return (
    <ClientsStack.Navigator>
      <ClientsStack.Screen
        name='ClientsScreen'
        component={ClientsScreen}
        options={{
          headerTitle:'Profile',
          headerStyle: {
            backgroundColor: '#294E4B',
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}/>
    </ClientsStack.Navigator>
  );
}

const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{
          headerTitle:'Sign in',
          headerStyle: {
            backgroundColor: '#294E4B',
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}/>
    </LoginStack.Navigator>
  );
}

const AuthenticateStack = createStackNavigator<AuthenticateParamList>();

function AuthenticateNavigator() {
  return (
    <AuthenticateStack.Navigator>
      <AuthenticateStack.Screen name="AuthenticateScreen" 
      component={AuthenticateScreen} 
      options={{
        headerTitle:'EVOLEON',
        headerStyle: {
          backgroundColor: '#294E4B',
        },
        headerTitleStyle: {
          color: 'white'
        }
      }}/>
    </AuthenticateStack.Navigator>
  )
}


const SignupStack = createStackNavigator<SignupParamList>();

function SignupNavigator() {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen name="SignupScreen" component={SignupScreen} 
      options={{
        headerTitle:'Sign up', 
        headerStyle: {
          backgroundColor: '#294E4B',
        },
        headerTitleStyle: {
          color: 'white'
        }
      }}/>
    </SignupStack.Navigator>
  )
}
