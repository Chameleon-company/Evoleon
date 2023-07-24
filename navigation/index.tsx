// React Native imports.
import { ColorSchemeName } from "react-native";

// Navigation imports.
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screen imports.
import NotFoundScreen from "../screens/NotFoundScreen";
import DrawerNavigator from "./DrawerNavigator";

// Type imports.
import { RootStackParamList } from "../types";

// Other imports.
import LinkingConfiguration from "./LinkingConfiguration";

/* If you are not familiar with React Navigation, we recommend going through the
 "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
 */

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={DrawerNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
