<!--- Add banner here --->

<img src="screens/evoleon app.png" width="500" height="500" >

# Evoleon App (react native)

<!-- Add buttons here -->
<!-- ![Github last commit](https://img.shields.io/github/last-commit/kathawala/expo-hamburger-menu-template)
![Github repo size](https://img.shields.io/github/repo-size/kathawala/expo-hamburger-menu-template) -->


<!-- Describe your project in brief -->

An android application to find the nearest charging point for electric cars with the help of navigation. This source code is useful for building a cross-platform mobile app with hamburger-menu-style navigation built in.This builds on top of the drawer-style navigation included in React Navigation by adding a hamburger menu button to the top-left of the screen which can open and close the drawer.
With gesture-navigation being the standard for Android 10+, the need for a clickable way to open and close app drawers has resurfaced.
This template provides that.

Uses: Expo v48, React Native 0.71, React Navigation 5.9, Typescript

Sets up for you: evoleon app menu, drawer navigation, tests (with jest), hooks, deep linking, custom font support, splash screen, dark/light mode support

# Preview

<!-- Add a demo for your project -->

<!-- ![Demo GIF](https://user-images.githubusercontent.com/103167070/192455518-93640be9-7136-4de2-8cb1-47cd96a8e8d7.mp4) -->
<video src='https://user-images.githubusercontent.com/103167070/192455518-93640be9-7136-4de2-8cb1-47cd96a8e8d7.mp4' width=180 />)
# Table of contents

- [Evoleon App]
- [Preview](#preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Say thanks!](#say-thanks)
  


# Usage
[(Back to top)](#table-of-contents)

Download the expo go app from the play / apple store. Scan the QR code shown in the terminal after running 'npm run start' and you will be able to view the app. At the moment, there is a problem with the web view for development. It's recommended to just use your phone for the moment.

The problem is with webpack, webpack is used to translate packages from react native which runs on mobile devices to a react web framework.

If you can't use your mobile phone for any sort of development, another option is to temporarily comment out the MapView container within ./screens/DatabaseScreen.tsx.

If you want to fix the web view issue, it's probably within the versions of react-native, react-native-web, react-native-maps and react-native-web-maps used. Have a look within webpack.config.js and uncomment the alias lines.
  

# Installation
[(Back to top)](#table-of-contents)

I'm using node 18 LTS. You can check your own by running 'node --version'

```bash
git clone https://github.com/Chameleon-company/Evoleon/
cd Evoleon
npm install
npm run start
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
npm cache clean --force
rm -rf node_modules
rm yarn.lock
yarn install
```

Update the expo version:

```bash
expo upgrade
```


 # Say thanks!
[(Back to top)](#table-of-contents)

If this saved you development time or you otherwise found it useful, leave a star or follow in GitHub.


<p align="center">
<img src="screens/EvoleonFinal.png" text-align="center" width="100" height="100" >
</p>
