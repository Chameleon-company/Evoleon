import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  getAuth,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  deleteDoc,
  where,
  writeBatch,
  query,
  getDocs,
  get,
} from "firebase/firestore";

//Boolean - true if user is signed in
var userIsAuthenticated;

export const getuserIsAuthenticated = () => {
  return userIsAuthenticated;
};

//Get the text for the sign in/sign out button in top left menu.
export var getSignInSignOutButtonText = () => {
  var text;
  if (userIsAuthenticated) {
    text = "Sign out";
  } else {
    text = "Sign in";
  }
  return text;
};

export const signInSignOutButtonPressed = () => {
  //If the user is signed in, then sign out the user.
  if (userIsAuthenticated) {
    userSignOut();
  }
};

//Firebase config for Evoleon Application
const firebaseConfig = {
  apiKey: "AIzaSyDKfzJfKg08xUAHb7WBhs-I2L8lQV5nUIg",
  authDomain: "evoleonapp.firebaseapp.com",
  projectId: "evoleonapp",
  storageBucket: "evoleonapp.appspot.com",
  messagingSenderId: "425564389277",
  appId: "1:425564389277:web:c86772f8abb19ffca47974",
  measurementId: "G-GL6LC3D645",
  databaseURL:
    "https://evoleonapp-default-rtdb.asia-southeast1.firebasedatabase.app",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const realtimeDB = getDatabase(app);
export const firestoreDB = getFirestore(app);

//Sign in for an existing user
export const userSignIn = (email, password) => {
  const authInfo = auth;
  signInWithEmailAndPassword(authInfo, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in with:", user.email);
      userIsAuthenticated = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

//Sign up for a new user
export const userSignUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Created new account for:", user.email);
      userIsAuthenticated = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

//Sign out of user account
export const userSignOut = () => {
  const authInfo = auth;
  auth
    .signOut()
    .then((userCredential) => {
      userIsAuthenticated = false;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// Locations Database
// export const fetchLocations = async () => {
//   const locationRef = ref(realtimeDB, "Locations");

//   return onValue(locationRef, (snapshot) => {
//     const data = snapshot.val();

//     if (snapshot.exists()) {
//       console.log(data);
//     } else {
//       console.log("no");
//     }
//   });
// };
export const fetchLocations = async () => {
  const locationRef = collection(firestoreDB, "Locations");
  const q = query(locationRef);
  const querySnapshot = await getDocs(q);

  const qMap = querySnapshot.docs.reduce((place, docSnapshot) => {
    console.log(docSnapshot.data().id);
    console.log(docSnapshot.data().lat);
    console.log(docSnapshot.data().long);
    console.log();
    const { id, lat, long } = docSnapshot.data();
    place[id] = [lat, long];

    return place;
  }, {});

  console.log(qMap);
  return qMap;
};
