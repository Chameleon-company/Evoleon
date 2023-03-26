const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
	var config = await createExpoWebpackConfigAsync(env, argv);

	// These once worked, now they do not. The webview is broken but if you comment out the "MapView" in "databasescreeen" you can get it working.
	// The problem is that webpack, and the react-native / react-native maps are not playing nice together.

	// config.resolve.alias['react-native'] = 'react-native-web';
	// config.resolve.alias['react-native-maps'] = 'react-native-web-maps';

	// Customize the config before returning it.
	return config;
};
