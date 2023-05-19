// React Navigation imports
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import * as React from "react";

// Screen imports
import DatabaseScreen from "../screens/DatabaseScreen";
import FileSystemScreen from "../screens/FileSystemScreen";
import ClientsScreen from "../screens/ClientsScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import AuthenticateScreen from '../screens/AuthenticateScreen';
import TermsAndConditionsScreen from "../screens/TermsAndConditionsScreen";
import SignupScreen from '../screens/SignupScreen';
import AboutScreen from "../screens/AboutScreen";
import UpdateUserDetailsScreen from "../screens/UpdateUserDetails"
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";

// Utility functions
import { getUserAuthStatus } from '../web/firebase' 

// Type imports
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
  UpdateUserDetailsParamList,
  PrivacyParamList,
} from "../types";

// Stack navigators
const DatabaseStack = createStackNavigator<DatabaseParamList>();
const FileSystemStack = createStackNavigator<FileSystemParamList>();
const ClientsStack = createStackNavigator<ClientsParamList>();
const ForgotPasswordStack = createStackNavigator<ForgotPasswordParamList>();
const LoginStack = createStackNavigator<LoginParamList>();
const AuthenticateStack = createStackNavigator<AuthenticateParamList>();
const TermsAndConditionsStack = createStackNavigator<TermsAndConditionsParamList>();
const SignupStack = createStackNavigator<SignupParamList>();
const AboutStack = createStackNavigator<AboutParamList>();
const UpdateUserDetailsStack = createStackNavigator<UpdateUserDetailsParamList>();
const PrivacyStack = createStackNavigator<PrivacyParamList>();

// Drawer navigator
const Drawer = createDrawerNavigator<DrawerParamList>();

// Function to filter menu items
const filterMenuItems = (props) => {
  return {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        (routeName) => routeName !== 'Login' && routeName !== 'Signup' && routeName !== 'Authenticate' && routeName !== 'ForgotPassword' && routeName !== 'TermsAndConditionsScreen' && routeName !==  `PrivacyPolicy`  && routeName !==  'Update Details'
      ),
      routes: props.state.routes.filter(
        (route) =>
          route.name !== 'Login' && route.name !== 'Signup' && route.name !== 'Authenticate' && route.name !== 'ForgotPassword'  && route.name !== 'TermsAndConditionsScreen' && route.name !== `PrivacyPolicy`  && route.name !==  'Update Details'
      ),
    },
  };
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Database" drawerContent={props => {
        const filteredProps = filterMenuItems(props);

        return (
          <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
          </DrawerContentScrollView>
        );
      }}>
      
      // Main menu items
      <Drawer.Screen name={getUserAuthStatus().Text} component={ClientsNavigator} />     
      <Drawer.Screen name="Database" component={DatabaseNavigator}/>
      <Drawer.Screen name="File System" component={FileSystemNavigator} />
      <Drawer.Screen name="About" component={AboutNavigator}/>

      // Hidden menu items
      <Drawer.Screen name="ForgotPassword" component={ForgotPasswordNavigator} />
      <Drawer.Screen name="Update Details" component={UpdateUserDetailsNavigator}/>
      <Drawer.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsNavigator} />
      <Drawer.Screen name="Authenticate" component={AuthenticateNavigator}/>
      <Drawer.Screen name="Login" component={LoginNavigator} />
      <Drawer.Screen name="Signup" component={SignupNavigator} />  
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyNavigator}/>  
    </Drawer.Navigator>
  );
}

// Navigator for each menu item
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

function ClientsNavigator() {
  return (
    <ClientsStack.Navigator>
      <ClientsStack.Screen
        name='Account'
        component={ClientsScreen}
        options={{
          headerTitle:'Account',
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

function UpdateUserDetailsNavigator() {
	return (
		<UpdateUserDetailsStack.Navigator>
			<UpdateUserDetailsStack.Screen
				name="UpdateUserDetailsScreen"
				component={UpdateUserDetailsScreen}
				options={{
					headerTitle: "Update Details",
					headerStyle: {
						backgroundColor: "#294E4B",
					},
					headerTitleStyle: {
						color: "white",
					},
				}}/>
		</UpdateUserDetailsStack.Navigator>
	);
}

function PrivacyNavigator() {
  return (
    <PrivacyStack.Navigator>
      <PrivacyStack.Screen 
        name="PrivacyPolicy" 
        component={PrivacyPolicyScreen} 
        options={{
          headerTitle:'Privacy Policy',

          headerStyle: {
            backgroundColor: '#294E4B',
          },
          headerTitleStyle: {
            color: 'white'
          },
        }}/>
    </PrivacyStack.Navigator>
  );
}
