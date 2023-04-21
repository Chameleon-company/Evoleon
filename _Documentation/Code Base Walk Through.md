# Code Base Walk Through

### Version 1.1 - Last updated on the 19th April 2023

## .expo directory
Why do I have a folder named ".expo" in my project?
* The ".expo" folder is created when an Expo project is started using "expo start" command.

What do the files contain?
* "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
* "settings.json": contains the server configuration that is used to serve the application manifest.

Should I commit the ".expo" folder?
* No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.

Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

## .github/workflows
Contains a node.js.yml workflow file that will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node.

For more information see: [https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions](Node.js with GitHub Actions.)


## assets directory 
Contains all the fonts and images (assets) for the project. 

## components 


## context


## hooks 


## ios


## navigation 


## node modules 


## screens
Contains all screens for the Evoleon App. 

## styles
Global styling for the app goes here. 

