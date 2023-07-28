import { GestureResponderEvent } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  BottomTab: undefined; // Add this line
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type DrawerParamList = {
  Database: undefined;
  FileSystem: undefined;
  Clients: undefined;
  Initial: undefined;
  Login: undefined;
  Authenticate: undefined;
  Signup: undefined;
};

export type DatabaseParamList = {
  DatabaseScreen: undefined;
};

export type FileSystemParamList = {
  FileSystemScreen: undefined;
};

export type ClientsParamList = {
  ClientsScreen: undefined;
};

export type ForgotPasswordParamList = {
  ForgotPasswordScreen: undefined;
};

export type InitialParamList = {
  InitialScreen: undefined;
};

export type LoginParamList = {
  LoginScreen: undefined;
};

export type AuthenticateParamList = {
  AuthenticateScreen: undefined;
};

export type TermsAndConditionsParamList = {
  TermsAndConditionsScreen: undefined;
};

export type SignupParamList = {
  SignupScreen: undefined;
};

export type AboutParamList = {
  AboutScreen: undefined;
};

export type UpdateUserDetailsParamList = {
  UpdateUserDetailsScreen: undefined;
};
export type onPressFunc = (event: GestureResponderEvent) => void;
