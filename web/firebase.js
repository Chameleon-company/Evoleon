import { signInWithEmailAndPassword, createUserWithEmailAndPassword, Auth, getAuth, signOut, updateProfile } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";


//Firebase config for Evoleon Application
const firebaseConfig = {
  apiKey: "AIzaSyDKfzJfKg08xUAHb7WBhs-I2L8lQV5nUIg",
  authDomain: "evoleonapp.firebaseapp.com",
  projectId: "evoleonapp",
  storageBucket: "evoleonapp.appspot.com",
  messagingSenderId: "425564389277",
  appId: "1:425564389277:web:c86772f8abb19ffca47974",
  measurementId: "G-GL6LC3D645"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestoreDB = getFirestore(app);

//Boolean - true if user is signed in
var userIsAuthenticated;


export const getuserIsAuthenticated = ()=> {
  return userIsAuthenticated;
}

//Get the text for the sign in/sign out button in top left menu.
export var getSignInSignOutButtonText = ()=> {
  var text;
  if(userIsAuthenticated){
    text = "Sign out of " + auth.currentUser.displayName + "'s account";
  }
  else {
    text = "Sign in";
  }
  return text;
} 


export const signInSignOutButtonPressed = ()=> {
  //If the user is signed in, then sign out the user.
  if(userIsAuthenticated){
    userSignOut();
  }
}


//Sign in for an existing user
export const userSignIn = async (email, password)=>{
  const authInfo = auth;
  await signInWithEmailAndPassword(authInfo, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed in with:", user.email);
      userIsAuthenticated = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    console.log('Welcome back', auth.currentUser.displayName);
}

//Sign up for a new user
export const userSignUp = async (email, password, firstName, lastName, country)=>{
   await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Created new account for:', user.email);
      userIsAuthenticated = true;
      updateProfileDetails(firstName);
    })
    .then(() => {
      userFirestoreData(firstName, lastName, country);
     })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

//Add users first name to firebase Authentication
export const updateProfileDetails = async (name) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
  }).then(() => {
    console.log("Profile updated.");
    console.log("Display name added: " + auth.currentUser.displayName);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

//Sign out of user account
export const userSignOut = async () => {
  const displayName = auth.currentUser.displayName;
  await auth.signOut().then(() => {
    userIsAuthenticated = false;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  console.log("Signed out of " + displayName + "'s account");
}


//Create new Firestore document for user using unqiue user ID
export const userFirestoreData = async (firstName, lastName, country) => {
  await setDoc(doc(firestoreDB, "UserData", auth.currentUser.uid),{
    firstName:  firstName,
    lastName: lastName,
    country: country
  });
}





