// Firebase auth imports.
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  deleteUser,
  getAuth,
  signOut,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';

// Firebase app imports.
import { initializeApp } from 'firebase/app';

// Firestore imports.
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  deleteDoc,
  query,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

import { getDatabase, ref, set } from 'firebase/database';

import { enviromental } from './enviromental/.env';

// Firebase config for Evoleon Application
const firebaseConfig = {
  apiKey: enviromental.apiKey,
  authDomain: enviromental.authDomain,
  projectId: enviromental.projectId,
  storageBucket: enviromental.storageBucket,
  messagingSenderId: enviromental.messagingSenderId,
  appId: enviromental.appId,
  measurementId: enviromental.measurementId,
  databaseURL: enviromental.databaseURL,
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const firestoreDB = getFirestore(app);

// Boolean - true if user is signed in
let userIsAuthenticated = false; // we don't have to use this anymore, phase this out

export const getuserIsAuthenticated = () => {
  return auth.currentUser ? true : false;
};

export const getUserName = () => {
  if (getuserIsAuthenticated()) {
    if (auth.currentUser.displayName != null) {
      return auth.currentUser.displayName;
    }
  }
  return '';
};

export const getUserNameTextForProfilePage = () => {
  if (getuserIsAuthenticated()) {
    const username = auth.currentUser.displayName;
    if (username) {
      return `${username}'s account details`;
    } else {
      return "undefined's account details";
    }
  } else {
    return 'Please log into your account';
  }
};

/* Determines the users status and produced the correct login/signout text.
A booleon value is also produced in order to be used to determine the status of the user.
*/
export let getUserAuthStatus = () => {
  let UserAuthText = '';

  if (userIsAuthenticated) {
    UserAuthText = auth.currentUser.displayName + "'s account";

    return { Text: UserAuthText, Status: true };
  } else {
    UserAuthText = 'Account';

    return { Text: UserAuthText, Status: false };
  }
};

export const LoginSignOutButtonPressed = () => {
  // If the user is logged in, then sign out the user.
  if (userIsAuthenticated) {
    userSignOut();
  }
};

// Login for an existing user.
export const userLogin = async (email, password) => {
  try {
    console.log('User tried to login to account.');
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    userIsAuthenticated = true;
    console.log('Signed in with:', user.email);
    console.log('Welcome back', user.displayName);
    return { success: true, user };
  } catch (err) {
    console.error('An Error has been caught');
    console.error('Error code:', err.code);
    console.error('Error message:', err.message);
    return { success: false, error: err };
  }
};

//Sign up for a new user
export const userSignUp = async (email, password, firstName, lastName, country, confirmPassword) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password, confirmPassword);
    userIsAuthenticated = true;
    const user = res.user;
    // await sendVerification(user);
    console.log('Updating profile details');
    await updateProfileDetails(firstName);
    console.log('Updating firestore data');
    await userFirestoreData(firstName, lastName, country);
    return true;
  } catch (err) {
    console.error('An Error has been caught');
    console.error('Error message:', err);
    return false;
  }
};

// Add users first name to firebase Authentication.
export const updateProfileDetails = async (name) => {
  try {
    await updateProfile(auth.currentUser, { displayName: name });
    console.log('Profile updated.');
    console.log('Display name added: ' + auth.currentUser.displayName);
    return true;
  } catch (error) {
    console.error('Error updating profile details:', error);
    return false;
  }
};

// Create new Firestore document for user using unqiue user ID.
export const userFirestoreData = async (firstName, lastName, country) => {
  try {
    await setDoc(doc(firestoreDB, 'UserData', auth.currentUser.uid), {
      firstName,
      lastName,
      country,
    });
    return true;
  } catch (err) {
    console.error('Error updating firestore data:', err);
    return false;
  }
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

  console.log('Signed out of ' + displayName + "'s account");
};

export const userPasswordResetAuth = async (UserEmail) => {
  try {
    const AuthInfo = auth;
    // Attempt to send a password reset email using the provided email address
    await sendPasswordResetEmail(AuthInfo, UserEmail);
    alert('Password reset email sent');
    return { success: true };
  } catch (error) {
    // Log the error message and return it
    console.log(error.message);
    return { success: false, error };
  }
};

// User needs to be logged in in order to delete their account.
// The button should not be visible for users not logged in.
export const userDeleteAccount = async () => {
  const AuthInfo = auth;
  const CurrUser = auth.currentUser;
  try {
    /* 
    Sign out the user from their account as we have already attained CurrUser infomation. 
    If this is done after the account is deleted, an error will be thrown and the app won't display correctly.
    */
    userSignOut();
    // Deleteing users account, this action is irreversable and cannot be undone.
    await deleteUser(CurrUser);

    return { success: true };
  } catch (error) {
    // Log the error message and return it
    console.log(error.message);
    return { success: false, error };
  }
};

// Add or remove an EV charger from a users favourite list in Firestore.
export const addOrRemoveChargerFromUserFavouriteListInFirestore = async (evChargerLocationVal) => {
  const document = doc(
    firestoreDB,
    'UserData',
    auth.currentUser.uid,
    auth.currentUser.uid + 'favouriteCharger',
    evChargerLocationVal.lat + '_' + evChargerLocationVal.long
  );

  // Remove favourite EV charging location.
  if (evChargerLocationIsInFavourites(evChargerLocationVal)) {
    const deleteDocument = await deleteDoc(document)
      .then(() => {
        console.log('Removed EV charger location from favourites');
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
        console.log('EV charger location added to favourites');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
};

// Gets the users favourite markers from Firestore
// The favourite markers are stored within an array called "favouriteMarkers" in the users document
// The array contains only ID's of the EV charger locations
export const getFavouriteMarkers = async () => {
  const user = auth.currentUser;

  if (!user) {
    return false;
  }

  const userDocRef = doc(firestoreDB, 'UserData', user.uid);

  try {
    const querySnapshot = await getDoc(userDocRef);

    if (querySnapshot.exists()) {
      const data = querySnapshot.data();
      const favouriteMarkers = data.favouriteMarkers || [];
      return favouriteMarkers;
    } else {
      console.error('No such document!');
      return [];
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return [];
  }
};

// Adds a marker to the users favourite markers in Firestore
// It is created in this manor to reduce the amount of reads and writes to Firestore
export const addFavouriteMarker = async (markerId) => {
  // Get the current user
  const user = auth.currentUser;

  // Check if the user is authenticated
  if (!user) {
    console.log("You're not signed in!");
    return false;
  }

  // Get the user's document reference
  const userDocRef = doc(firestoreDB, 'UserData', user.uid);

  try {
    // Try to update the document with the markerId using arrayUnion
    await updateDoc(userDocRef, {
      favouriteMarkers: arrayUnion(markerId),
    });
  } catch (error) {
    console.error('Error updating document:', error);

    // Check if the error is due to the document not being created
    if (error.code === 'not-found') {
      try {
        // Create the document and add the markerId
        await setDoc(userDocRef, { favouriteMarkers: [markerId] });
      } catch (createError) {
        console.error('Error creating document:', createError);
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

// Similar to above, but removes the marker from the users favourite markers in Firestore
export const removeFavouriteMarker = async (markerId) => {
  // Get the current user
  const user = auth.currentUser;

  // Check if the user is authenticated
  if (!user) {
    return false;
  }

  // Get the user's document reference
  const userDocRef = doc(firestoreDB, 'UserData', user.uid);

  try {
    // Try to remove the markerId from the favouriteMarkers array using arrayRemove
    await updateDoc(userDocRef, {
      favouriteMarkers: arrayRemove(markerId),
    });
  } catch (error) {
    console.error('Error updating document:', error);

    // Check if the error is due to the array not existing
    if (error.code === 'not-found') {
      try {
        // Create an empty favouriteMarkers array
        await setDoc(userDocRef, { favouriteMarkers: [] });
      } catch (createError) {
        console.error('Error creating document:', createError);
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

export let favouriteMarkers = [{}];

export const getUsersFavouriteListInFirestore = async () => {
  if (userIsAuthenticated) {
    const getSubCollection = collection(
      firestoreDB,
      'UserData',
      auth.currentUser.uid,
      auth.currentUser.uid + 'favouriteCharger'
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
    console.log('Current users favourite markers: ' + favouriteMarkers);
  }
  return favouriteMarkers;
};

export const evChargerLocationIsInFavourites = (val) => {
  for (let i = 0; i < favouriteMarkers.length; i++) {
    if ((val.lat == favouriteMarkers[i].lat) & (val.long == favouriteMarkers[i].long)) {
      return true;
    }
  }
  return false;
};

// export const sendVerification = async (email) => {
//   try {
/* FIXME: An error occurs when this is called. This error is due to the Evoleon application making too many firestore calls at any given time.
    This might be reduced by reducing the amount of calls such as update details on signup.
    */
// const auth = getAuth();
// const user = auth.currentUser;
//     await sendEmailVerification(auth.currentUser);
//     return true;
//   } catch (error) {
//     console.error("Error sending verification email:", error);
//     return false;
//   }
// };

// Get all EV charger locations from Firestore, return as object instead of array
export const fetchLocations = async () => {
  const locationRef = collection(firestoreDB, 'Locations');
  const q = query(locationRef);
  const querySnapshot = await getDocs(q);

  const locations = querySnapshot.docs.map((docSnapshot) => {
    const { id, lat, long, Dining, Restroom, Park, title } = docSnapshot.data();
    const location = {
      id,
      lat,
      long,
      Dining,
      Restroom,
      Park,
      title,
    };
    return location;
  });
  return locations;
};

export const updateUserData = async (userDetails) => {
  // if not logged in
  if (!userIsAuthenticated) {
    return null;
  }
  // Get the user's document reference
  const user = auth.currentUser;
  const userDocRef = doc(firestoreDB, 'UserData', user.uid);

  // Initialize an object to hold the updates
  let updates = {};

  // Check each field in userDetails. If it's not empty or null, add it to the updates
  if (userDetails.name && userDetails.name !== '') {
    updates.name = userDetails.name;
  }

  if (userDetails.displayName && userDetails.displayName !== '') {
    updates.displayName = userDetails.displayName;
    await updateProfile(auth.currentUser, {
      displayName: userDetails.displayName,
    });
  }

  if (userDetails.email && userDetails.email !== '') {
    updates.email = userDetails.email;
  }

  if (userDetails.phone && userDetails.phone !== '') {
    updates.phone = userDetails.phone;
  }

  if (userDetails.residentialAddress && userDetails.residentialAddress !== '') {
    updates.residentialAddress = userDetails.residentialAddress;
  }

  if (userDetails.registrationNumber && userDetails.registrationNumber !== '') {
    updates.registrationNumber = userDetails.registrationNumber;
  }

  if (userDetails.carType && userDetails.carType !== '') {
    updates.carType = userDetails.carType;
  }

  // If there are any updates, write them to the document in Firestore
  if (Object.keys(updates).length > 0) {
    await updateDoc(userDocRef, updates);
  }
};

export const fetchUserDetails = async () => {
  // if not logged in
  if (!userIsAuthenticated) {
    return null;
  }

  // Get the current user
  const user = auth.currentUser;

  // Get the user's document reference
  const userDocRef = doc(firestoreDB, 'UserData', user.uid);

  // Fetch the document
  const userDoc = await getDoc(userDocRef);

  console.log(userDoc.data());

  // Check if the document exists
  if (userDoc.exists()) {
    const data = userDoc.data();
    const fields = ['name', 'displayName', 'email', 'phone', 'residentialAddress', 'registrationNumber', 'carType'];

    // Create an object with only the available fields
    let userDetails = {};
    fields.forEach((field) => {
      if (data[field]) {
        userDetails[field] = data[field];
      }
    });

    return userDetails;
  } else {
    // If the document does not exist, return null or handle this situation as you see fit
    return null;
  }
};

export const logoutUser = () => {
  // if not logged in
  if (!userIsAuthenticated) {
    return null;
  }
  signOut(auth)
    .then(() => {
      // Update the authentication status
      userIsAuthenticated = false;
      console.log('User logged out');
    })
    .catch((error) => {
      console.error('Error logging out:', error);
    });
};
