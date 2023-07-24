// Expo imports.
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Database: {
            screens: {
              DatabaseScreen: "database",
            },
          },
          FileSystem: {
            screens: {
              FileSystemScreen: "filesystem",
            },
          },
          Clients: {
            screens: {
              ClientsScreen: "clients",
            },
          },
          Login: {
            screens: {
              LoginScreen: "login",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
