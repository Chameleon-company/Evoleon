import {
  LoginWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  getAuth,
  signOut,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
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
var userIsAuthenticated = false;

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
export const firestoreDB = getFirestore(app);

//Boolean - true if user is signed in
var userIsAuthenticated = false;

export const getuserIsAuthenticated = () => {
  return userIsAuthenticated;
};

export const getUserName = () => {
  if (getuserIsAuthenticated()) {
    if (auth.currentUser.displayName != null) {
      return auth.currentUser.displayName;
    }
  }
  return "";
};

export const getUserNameTextForProfilePage = () => {
  if (getuserIsAuthenticated()) {
    return auth.currentUser.displayName.concat("'s account details");
  } else {
    return "Please log into your account";
  }
};

//Get the text for the sign in/sign out button in top left menu.
export var getLoginSignOutButtonText = () => {
  var text;
  if (userIsAuthenticated) {
    text = "Sign out of " + auth.currentUser.displayName + "'s account";
  } else {
    text = "Login";
  }
  return text;
};

export const LoginSignOutButtonPressed = () => {
  //If the user is signed in, then sign out the user.
  if (userIsAuthenticated) {
    userSignOut();
  }
};

//Login for an existing user
export const userLogin = async (email, password) => {
  const authInfo = auth;
  let errorCaught = false;
  await LoginWithEmailAndPassword(authInfo, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed in with:", user.email);
      userIsAuthenticated = true;
      console.log("Welcome back", auth.currentUser.displayName);
      errorCaught = false;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code);
      console.log(error.message);
      errorCaught = true;
    });

  if (errorCaught == false) {
    return true;
  } else {
    return false;
  }
};

//Sign up for a new user
export const userSignUp = async (
  email,
  password,
  firstName,
  lastName,
  country
) => {
  let errorCaught = false;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Created new account for:", user.email);
      userIsAuthenticated = true;
      updateProfileDetails(firstName);
      errorCaught = false;
    })
    .then(() => {
      userFirestoreData(firstName, lastName, country);
      errorCaught = false;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      errorCaught = true;
    });

  if (errorCaught == false) {
    return true;
  } else {
    return false;
  }
};

//Add users first name to firebase Authentication
export const updateProfileDetails = async (name) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
  })
    .then(() => {
      console.log("Profile updated.");
      console.log("Display name added: " + auth.currentUser.displayName);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

//Sign out of user account
export const userSignOut = async () => {
  const displayName = auth.currentUser.displayName;
  await auth
    .signOut()
    .then(() => {
      userIsAuthenticated = false;
      favouriteMarkers = [{}];
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  console.log("Signed out of " + displayName + "'s account");
};

//Create new Firestore document for user using unqiue user ID
export const userFirestoreData = async (firstName, lastName, country) => {
  await setDoc(doc(firestoreDB, "UserData", auth.currentUser.uid), {
    firstName: firstName,
    lastName: lastName,
    country: country,
  });

  //Create subcollection within users document to store users favourite charger locations
  const subCollectionInitialData = { initialCollectionItem: "initial-data" };
  const subCollection = doc(
    firestoreDB,
    "UserData",
    auth.currentUser.uid,
    auth.currentUser.uid + "favouriteCharger",
    "favouriteCharger"
  );
  await setDoc(subCollection, subCollectionInitialData, { merge: true });
};

// Add or remove an EV charger from a users favourite list in Firestore
export const addOrRemoveChargerFromUserFavouriteListInFirestore = async (
  evChargerLocationVal
) => {
  const document = doc(
    firestoreDB,
    "UserData",
    auth.currentUser.uid,
    auth.currentUser.uid + "favouriteCharger",
    evChargerLocationVal.lat + "_" + evChargerLocationVal.long
  );

  //Remove favourite EV charging location
  if (evChargerLocationIsInFavourites(evChargerLocationVal)) {
    const deleteDocument = await deleteDoc(document)
      .then(() => {
        console.log("Removed EV charger location from favourites");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  } else {
    //Add favourite EV charging location
    const newFavouriteLocation = {
      lat: evChargerLocationVal.lat,
      long: evChargerLocationVal.long,
      Dining: evChargerLocationVal.Dining,
      Park: evChargerLocationVal.Park,
      Restroom: evChargerLocationVal.Restroom,
    };

    await setDoc(document, newFavouriteLocation, { merge: true })
      .then(() => {
        console.log("EV charger location added to favourites");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
};

export let favouriteMarkers = [{}];

export const getUsersFavouriteListInFirestore = async () => {
  if (userIsAuthenticated) {
    const getSubCollection = collection(
      firestoreDB,
      "UserData",
      auth.currentUser.uid,
      auth.currentUser.uid + "favouriteCharger"
    );

    const queryVal = query(getSubCollection);
    const querySnapshot = await getDocs(queryVal);
    const queryMap = querySnapshot.docs.reduce((place, docSnapshot) => {
      const { id, lat, long, Dining, Park, Restroom } = docSnapshot.data();
      place[id] = [lat, long, Dining, Park, Restroom];
      return place;
    }, {});

    const queryMapValues = await Object.values(queryMap);
    favouriteMarkers = [{}];

    for (let i = 0; i < queryMapValues.length; i++) {
      const object = {
        lat: queryMapValues[i][0],
        long: queryMapValues[i][1],
        Dining: queryMapValues[i][2],
        Park: queryMapValues[i][3],
        Restroom: queryMapValues[i][4],
      };
      favouriteMarkers[i] = object;
    }
    console.log("Current users favourite markers: " + favouriteMarkers);
  }
  return favouriteMarkers;
};

export const evChargerLocationIsInFavourites = (val) => {
  for (let i = 0; i < favouriteMarkers.length; i++) {
    if (
      (val.lat == favouriteMarkers[i].lat) &
      (val.long == favouriteMarkers[i].long)
    ) {
      return true;
    }
  }
  return false;
};

export const fetchLocations = async () => {
  const locationRef = collection(firestoreDB, "Locations");
  const q = query(locationRef);
  const querySnapshot = await getDocs(q);

  const qMap = querySnapshot.docs.reduce((place, docSnapshot) => {
    const { id, lat, long, Dining, Restroom, Park, title } = docSnapshot.data();
    place[id] = [lat, long, Dining, Restroom, Park, title];

    return place;
  }, {});

  return qMap;
};
