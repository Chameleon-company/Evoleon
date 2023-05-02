import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import * as React from "react";

import DatabaseScreen from "../screens/DatabaseScreen";
import FileSystemScreen from "../screens/FileSystemScreen";
import ClientsScreen from "../screens/ClientsScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import AuthenticateScreen from '../screens/AuthenticateScreen';
import TermsAndConditionsScreen from "../screens/TermsAndConditionsScreen";
import SignupScreen from '../screens/SignupScreen';
import AboutScreen from "../screens/AboutScreen";
import {getLoginSignOutButtonText, LoginSignOutButtonPressed} from '../web/firebase' 

import {
  DrawerParamList,
  DatabaseParamList,
  FileSystemParamList,
  ClientsParamList,
  LoginParamList,
  ForgotPasswordParamList,
  TermsAndConditionsParamList,
  AuthenticateParamList, 
  SignupParamList,
  AboutParamList,
  PasswordResetParamList
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
              // The different screens can be excluded from the hamburger menu, by routing them here. 
              (routeName) => {
                routeName !== 'Login' && routeName !== 'Signup' && routeName !== 'Authenticate' && routeName !== 'ForgotPassword' && routeName !== 'TermsAndConditionsScreen';
              }
            ),
            routes: props.state.routes.filter(
              (route) =>
                route.name !== 'Login' && route.name !== 'Signup' && route.name !== 'Authenticate' && route.name !== 'ForgotPassword'  && route.name !== 'TermsAndConditionsScreen'
            ),
          },
        };

  
      return (
        
        <DrawerContentScrollView {...filteredTopLeftMenuItems}>
        <DrawerItemList {...filteredTopLeftMenuItems} />
          <DrawerItem label={getLoginSignOutButtonText().first} onPress={() => {

            props.navigation.navigate("Authenticate");
          }
        }/>
        </DrawerContentScrollView>
      )
    }}>

      {/* These represent the menus in the hamburger menu. */}
      <Drawer.Screen name="About" component={AboutNavigator}/>
      <Drawer.Screen name="File System" component={FileSystemNavigator} />
      <Drawer.Screen name="Clients" component={ClientsNavigator} />
      <Drawer.Screen name="Database" component={DatabaseNavigator}/>
      

      {/* These menus are not displayed in the hamburger menu as they are routed and filteredout of the menu.*/}
      <Drawer.Screen name="ForgotPassword" component={ForgotPasswordNavigator} />
      <Drawer.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsNavigator} />
      <Drawer.Screen name="Authenticate" component={AuthenticateNavigator}/>
      <Drawer.Screen name="Login" component={LoginNavigator} />
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
          headerTitle:'EV Database Map',
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
          headerTitle:'File System',
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

const ForgotPasswordStack = createStackNavigator<ForgotPasswordParamList>();

function ForgotPasswordNavigator() {
  return (
    <ForgotPasswordStack.Navigator>
      <ForgotPasswordStack.Screen
        name='ForgotPasswordScreen'
        component={ForgotPasswordScreen}
        options={{
          headerTitle:'Forgot Password',
          headerStyle: {
            backgroundColor: '#294E4B',
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}/>
    </ForgotPasswordStack.Navigator>
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
          headerTitle:'Login',
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
      <AuthenticateStack.Screen 
      name="AuthenticateScreen" 
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

const TermsAndConditionsStack = createStackNavigator<TermsAndConditionsParamList>();

function TermsAndConditionsNavigator() {
  return (
    <TermsAndConditionsStack.Navigator>
      <TermsAndConditionsStack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
          options={{
            headerTitle:'Terms and Conditions',
            headerStyle: {
              backgroundColor: '#294E4B',
            },
            headerTitleStyle: {
              color: 'white'
            },
          }}/>
    </TermsAndConditionsStack.Navigator>
  )
}

const SignupStack = createStackNavigator<SignupParamList>();

function SignupNavigator() {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen 
      name="SignupScreen" 
      component={SignupScreen} 
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

const AboutStack = createStackNavigator<AboutParamList>();

function AboutNavigator() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen 
        name="AboutScreen" 
        component={AboutScreen} 
        options={{
          headerTitle:'About',
          headerStyle: {
            backgroundColor: '#294E4B',
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}/>
    </AboutStack.Navigator>
  );
}
