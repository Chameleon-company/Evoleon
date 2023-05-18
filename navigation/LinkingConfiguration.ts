import * as Linking from "expo-linking";

// LinkingConfiguration is used for deep linking in a React Native application.
// Deep Linking directs users to a specific location within your application rather than simply launching the application.
// makeUrl constructs a URL that can be handled by the Linking API.
// More about Expo Linking: https://docs.expo.dev/versions/latest/sdk/linking/
export default {
  // `prefixes` are used for matching the incoming URL, to ensure it is meant for this app.
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      // Root is the main or home screen of the application.
      Root: {
        screens: {
          Database: {
            screens: {
              // Maps "database" to the "DatabaseScreen".
              DatabaseScreen: "database",
            },
          },
          FileSystem: {
            screens: {
              // Maps "filesystem" to the "FileSystemScreen".
              FileSystemScreen: "filesystem",
            },
          },
          Clients: {
            screens: {
              // Maps "clients" to the "ClientsScreen".
              ClientsScreen: "clients",
            },
          },
          Login: {
            screens: {
              // Maps "login" to the "LoginScreen".
              LoginScreen: "login",
            },
          },
        },
      },
      // A wildcard '*' route is used to handle undefined routes.
      NotFound: "*",
    },
  },
};
