# Coding Practices for Evoleon AppDev 

## General Guidelines 
* Use clear and descriptive names for all functions, variables, and components. 
* Use consistent naming conventions throughout the codebase. Current practices can be found in “Variable Naming Section” of this document. 
* Write comments to explain complex logic or any code that may be difficult to understand. 
* Use indentation to make the code easy to read. 
* Use meaningful commit messages and follow a branching strategy. 

# Variable Naming 
All variables should be in `PascalCase`, **except for the following**: 
* `get`, `use`, `set` should be in `camelCase`, as these are descriptions for said variable. 
Variables should be named in a clear and descriptive manner, using nouns for objects and verbs for functions and methods. 

## Examples: 
### javascript 
```bash
// PascalCase examples //

import { Image, TouchableOpacity } from "react-native"; 
import { ClientStyle } from "../styles/ClientStyle"; 

export default function ClientsScreen() { 
  const Navigation = useNavigation(); 
  const [ProfileText, setProfileText] = useState("Please log into your account"); 
  const [LoginSignOutText, setLoginSignOutText] = useState("Sign in"); 
 
  const authActions = () => { 
    if (getuserIsAuthenticated()) { 
      LoginSignOutButtonPressed(); 
      setProfileText("Please login to view account"); 
      setLoginSignOutText("Sign in"); 
    } else { 
      navigation.navigate("Login"); 
    } 
  }; 
} 

```

```bash
// camelCase examples //

function getUserData() {...} 
const UserToken = getToken(); 
const setUsername = (NewUsername) => {...} 

```

## Spacing and Formatting 
* Use two spaces for indentation. 
* Use one space between parentheses and their contents. 
* Use one space between the function name and the opening parentheses. 
* Use one space between operators and their operands. 
* Use blank lines to separate code blocks for clarity. 

## Examples: 
### javascript 

```bash
// Good spacing and formatting 

import * as React from "react"; 
import { useNavigation } from "@react-navigation/native"; 
import { StackHeaderLeftButtonProps } from "@react-navigation/stack"; 

const ClientStyle = {...}; 

export default function ClientsScreen() { 
  const Navigation = useNavigation(); 

  const [ProfileText, setProfileText] = useState("Please log into your account"); 
  const [LoginSignOutText, setLoginSignOutText] = useState("Sign in"); 

  useEffect(() => { 
    navigation.setOptions({ 
      headerLeft: (props: StackHeaderLeftButtonProps) => <MenuIcon />, 
    }); 

    Nvigation.addListener("focus", () => { 
      setProfileText(getUserNameTextForProfilePage()); 
      setLoginSignOutText(getLoginSignOutButtonText()); 
    }); 
  }); 
 
  const AuthActions = () => { 
    if (getuserIsAuthenticated()) { 
      LoginSignOutButtonPressed(); 
      setProfileText("Please login to view account"); 
      setLoginSignOutText("Sign in"); 
    } else { 
      Navigation.navigate("Login"); 
    } 
  }; 
 
  return ( 
    <View style={ClientStyle.content}> 
      <View style={ClientStyle.TopPageContent}> 
        <Image 
          style={ClientStyle.ProfileImage} 
          source={require("../assets/EvoleonFinal.png")} 
        /> 
        <Text style={ClientStyle.HeadingText}>{ProfileText}</Text> 
      </View> 
 
      <View style={ClientStyle.ProfileActionsView}> 
        <TouchableOpacity style={ClientStyle.profileActionsCell}> 
          <Text style={ClientStyle.profileActionsText}>Edit Information</Text> 
          <Image 
            source={require("../assets/Arrow.png")} 
            style={ClientStyle.arrow} 
          /> 
        </TouchableOpacity> 

        <TouchableOpacity style={ClientStyle.ProfileActionsCell}> 
          <Text style={ClientStyle.profileActions 

```

# Commenting Practices  

## Use Comments to Explain Code 
Comments should explain what the code does, not how it does it. Code should be self-explanatory, but comments can provide additional context and help other developers understand the intent behind the code. 

### javascript 
```bash
// This function calculates the sum of two numbers 

function add (a, b) { 
  return a + b; 
} 
```

## Use Clear and Concise Comments 
Comments should be clear and concise. Avoid comments that are too long or unnecessary. Use correct spelling and punctuation for comments in your code. 

### javascript 
```bash
// The following is a bad comment because it's too long and doesn't add any value 

// This function takes in a string and returns the uppercase version of that string 
function ToUpperCase(str) { 
  return str.ToUpperCase(); 
} 

 
// The following is a good comment because it's clear and concise 

// Uppercases a string function 
function ToUpperCase(str) { 
  return str.ToUpperCase(); 
} 
```

## Use Comments to Document Interfaces 
Use comments to document the inputs and outputs of a function or component. This makes it easier for other developers to understand how to use the code. 

### javascript 
```bash
/** 
 * Renders a list of items: 
 * @param {Array} items - The list of items to render. 
 * @param {Function} RenderItem - The function to use to render each item. 
 * @returns {JSX.Element} - The rendered list of items. 
 */ 

function ItemList({ Items, RenderItem }) { 
  // ... 
} 
```

## Use Comments to Document Edge Cases 
Use comments to document any edge cases or unusual behaviour in the code. This can help other developers avoid unexpected behaviour when using the code. 

### javascript 
```bash
/** 
 * Gets the user's name for the profile page. 
 * Returns "Please log into your account" if the user is not authenticated. 
 * @returns {string} - The user's name or a message indicating the user needs to login. 
 */ 

function getUserNameTextForProfilePage() { 
  if (!getUserIsAuthenticated()) { 
    // User is not authenticated, return a message indicating they need to login. 
    return "Please log into your account"; 
  } 
  // ... 
} 
```

## Use Comments to Document TODOs and FIXMEs 
Use comments to document any TODOs or FIXMEs in the code. This can help other developers know what work still needs to be done or what issues need to be addressed. 

### javascript 
```bash
// TODO: Add error handling for invalid inputs. 
function DoSomething(input) { 
  // ... 
} 
 
// FIXME: This code is causing a memory leak. 
function ProblematicCode() { 
  // ... 
} 
```
*Content Authored by: Jordan Sam Cooke*
*Converted to Markdown: Mick Wiedermann* 