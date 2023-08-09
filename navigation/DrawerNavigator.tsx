// Navigation imports.
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

// Screens imports.
import AboutScreen from "../screens/AboutScreen";
import AuthenticateScreen from "../screens/AuthenticateScreen";
import ClientsScreen from "../screens/ClientsScreen";
import DatabaseScreen from "../screens/DatabaseScreen";
import FileSystemScreen from "../screens/FileSystemScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import LoginScreen from "../screens/LoginScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import TermsAndConditionsScreen from "../screens/TermsAndConditionsScreen";
import UpdateUserDetailsScreen from "../screens/UpdateUserDetailsScreen";
import HelpAndSupportScreen from "../screens/HelpAndSupportScreen";


import {

  getUserAuthStatus,
} from "../web/firebase";

// Types and styles imports.
import {
  AboutParamList,
  AuthenticateParamList,
  ClientsParamList,
  DatabaseParamList,
  DrawerParamList,
  FileSystemParamList,
  ForgotPasswordParamList,
  LoginParamList,
  PrivacyParamList,
  SignupScreen,
  TermsAndConditionsParamList,
  UpdateUserDetailsParamList,
  HelpAndSupportParamList,
} from "../types";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {

  const excludedScreens = [
    "Login",
    "Signup",
    "Authenticate",
    "ForgotPassword",
    "TermsAndConditionsScreen",
    "PrivacyPolicy",
    "About",
  ];

  return (
    // TODO: Move this component definition out of the parent component “DrawerNavigator” and pass data as props.
    <Drawer.Navigator
      initialRouteName="Database"
      drawerContent={(props) => {
        const filteredTopLeftMenuItems = {
          ...props,
          state: {
            ...props.state,
            routeNames: props.state.routeNames.filter(
              (routeName) => !excludedScreens.includes(routeName)
            ),
            routes: props.state.routes.filter(
              (route) => !excludedScreens.includes(route.name)
            ),
          },
        };

        return ( 
          <DrawerContentScrollView {...filteredTopLeftMenuItems}>
            <DrawerItemList {...filteredTopLeftMenuItems} />
          </DrawerContentScrollView>
        );
      }}
    >
      {/* These represent the menus in the hamburger menu. */}

      {/* NOTE: THIS IS IN FACT INVISIBLE. THE ABOVE DRAWER ITEM REDIRECTS TO THIS. THIS IS THE USERNAME IS DISPLAYED . */}
      <Drawer.Screen
        name={getUserAuthStatus().Text}
        component={ClientsNavigator}
      />

      <Drawer.Screen name="Database" component={DatabaseNavigator} />
      <Drawer.Screen name="File System" component={FileSystemNavigator} />
      <Drawer.Screen name="About" component={AboutNavigator} />
      <Drawer.Screen name="HelpAndSupportScreen" component={HelpAndSupportNavigator} />

      {/* These menus are not displayed in the hamburger menu as they are routed and filtered out of the menu.*/}
      <Drawer.Screen
        name="ForgotPassword"
        component={ForgotPasswordNavigator}
      />
      <Drawer.Screen
        name="Update Details"
        component={UpdateUserDetailsNavigator}
      />
      <Drawer.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsNavigator}
      />
      
      <Drawer.Screen name="Authenticate" component={AuthenticateNavigator} />
      <Drawer.Screen name="Login" component={LoginNavigator} />
      <Drawer.Screen name="Signup" component={SignupNavigator} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyNavigator} />
    </Drawer.Navigator>
  );
}

// Stack navigators for various screens
const DatabaseStack = createStackNavigator<DatabaseParamList>();

function DatabaseNavigator() {
  return (
    <DatabaseStack.Navigator>
      <DatabaseStack.Screen
        name="DatabaseScreen"
        component={DatabaseScreen}
        options={{
          headerTitle: "EV Database Map",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
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
          headerTitle: "File System",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </FileSystemStack.Navigator>
  );
}

const ClientsStack = createStackNavigator<ClientsParamList>();

function ClientsNavigator() {
  return (
    <ClientsStack.Navigator>
      <ClientsStack.Screen
        name="Account"
        component={ClientsScreen}
        options={{
          headerTitle: "Account",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </ClientsStack.Navigator>
  );
}

const ForgotPasswordStack = createStackNavigator<ForgotPasswordParamList>();

function ForgotPasswordNavigator() {
  return (
    <ForgotPasswordStack.Navigator>
      <ForgotPasswordStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerTitle: "Forgot Password",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
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
          headerTitle: "Login",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
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
          headerTitle: "EVOLEON",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </AuthenticateStack.Navigator>
  );
}

const TermsAndConditionsStack =
  createStackNavigator<TermsAndConditionsParamList>();

function TermsAndConditionsNavigator() {
  return (
    <TermsAndConditionsStack.Navigator>
      <TermsAndConditionsStack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
        options={{
          headerTitle: "Terms and Conditions",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </TermsAndConditionsStack.Navigator>
  );
}

const SignupStack = createStackNavigator<SignupParamList>();

function SignupNavigator() {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerTitle: "Sign up",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </SignupStack.Navigator>
  );
}

const AboutStack = createStackNavigator<AboutParamList>();

function AboutNavigator() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerTitle: "About",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </AboutStack.Navigator>
  );
}

const UpdateUserDetailsStack =
  createStackNavigator<UpdateUserDetailsParamList>();

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
        }}
      />
    </UpdateUserDetailsStack.Navigator>
  );
}
const PrivacyStack = createStackNavigator<PrivacyParamList>();

function PrivacyNavigator() {
  return (
    <PrivacyStack.Navigator>
      <PrivacyStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{
          headerTitle: "Privacy Policy",

          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </PrivacyStack.Navigator>
  );
}

const HelpAndSupportStack = createStackNavigator<HelpAndSupportParamList>();

function HelpAndSupportNavigator() {
  return (
    <HelpAndSupportStack.Navigator>
      <HelpAndSupportStack.Screen
        name="HelpAndSupportScreen"
        component={HelpAndSupportScreen}
        options={{
          headerTitle: "Help and Support",
          headerStyle: {
            backgroundColor: "#294E4B",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </HelpAndSupportStack.Navigator>
  );
}
