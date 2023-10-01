# Getting Started

# Usage
Download the expo go app from the play / apple store. Scan the QR code shown in the terminal after running 'npx expo start' and you will be able to view the app. At the moment, there is a problem with the web view for development. It's recommended to just use your phone for the moment.

The problem is with webpack, webpack is used to translate packages from react native which runs on mobile devices to a react web framework.

If you can't use your mobile phone for any sort of development, another option is to temporarily comment out the MapView container within ./screens/DatabaseScreen.tsx.

If you want to fix the web view issue, it's probably within the versions of react-native, react-native-web, react-native-maps and react-native-web-maps used. Have a look within webpack.config.js and uncomment the alias lines.
  

# Installation
Currently using node 18 LTS. You can check your own by running 'node --version'

```bash
git clone https://github.com/Chameleon-company/Evoleon/
cd Evoleon
npm install (if npm ERR! occurs --force it)
npx expo start
if the above doesn't work after running npx expo start then follow the steps below:
npm fund
yarn install
npx expo start
```

## Updating 
If the above doesn't work due to updates etc. Update your node, yarn and expo:

```bash
vm install --lts
npm install -g yarn
npm install -g expo-cli
```

Refresh the repo packages:

```bash
git clone https://github.com/Chameleon-company/Evoleon
cd Evoleon
yarn cache clean
npx cache clean --force
rm -rf node_modules
rm yarn.lock
yarn install
```

Update the expo version:

```bash
expo upgrade
```

## Security

Due to security issue with students uploading API keys to GitHub, please reach out to security team for the API dotenv file. If you miss this step no firebase functionality will work.

```bash
touch .env
```

This file needs to be added into the repository, a video on this can be found [here](https://youtu.be/WSJHG6NeovQ).

If you need the enviromental file and are not apart of the Chameleon team, please contact the team through GitHub.

##### Content Authored by:
*Mick Wiedermann*
*Jordan Sam Cooke*
*Joel Murphy-Dyer*
