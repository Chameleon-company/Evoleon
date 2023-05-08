import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  Auth,
  sendEmailVerification,
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
  updateDoc,
	arrayUnion,
	arrayRemove
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
    const username = auth.currentUser.displayName;
    if (username) {
      return `${username}'s account details`;
    } else {
      return "undefined's account details";
    }
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
    text = "Account";
  }
  return text;
};

export const LoginSignOutButtonPressed = () => {
  //If the user is signed in, then sign out the user.
  if (userIsAuthenticated) {
    userSignOut();
  }
};

// Login for an existing user.
export const userLogin = async (email, password) => {
  try {
    console.log("User tried to login to account.");
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    userIsAuthenticated = true;
    console.log("Signed in with:", user.email);
    console.log("Welcome back", user.displayName);
    return { success: true, user };
  } catch (err) {
    console.error("An Error has been caught");
    console.error("Error code:", err.code);
    console.error("Error message:", err.message);
    return { success: false, error: err };
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
  try {
    console.log("User tried to create a new account.");
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    userIsAuthenticated = true;
    await sendEmailVerification(user);
    console.log("Updating profile details");
    await updateProfileDetails(firstName);
    console.log("Updating firestore data");
    await userFirestoreData(firstName, lastName, country);
    return true;
  } catch (err) {
    console.error("An Error has been caught");
    console.error("Error message:", err)
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

export const userPasswordResetAuth = async (UserEmail) => {
  try {
    const AuthInfo = auth;
    // Attempt to send a password reset email using the provided email address
    await sendPasswordResetEmail(AuthInfo, UserEmail);
    alert("Password reset email sent");
    return { success: true };
  } catch (error) {
    // Log the error message and return it
    console.log(error.message);
    return { success: false, error };
  }
};


// Create new Firestore document for user using unqiue user ID.
export const userFirestoreData =  (firstName, lastName, country) => {
  return new Promise((resolve, reject) => { 
    setDoc(doc(firestoreDB, "UserData", auth.currentUser.uid), {
      firstName: firstName,
      lastName: lastName,
      country: country,
    }).then((res) => {
      resolve(true);
    }).catch((err) => {
      reject(false);
    });
   })
};

// Add or remove an EV charger from a users favourite list in Firestore.
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

// Gets the users favourite markers from Firestore
// The favourite markers are stored within an array called "favouriteMarkers" in the users document
// The array contains only ID's of the EV charger locations
export const getFavouriteMarkers = async () => {
	const user = auth.currentUser;
  
	if (!user) {
	  return false;
	}
  
	const userDocRef = doc(firestoreDB, "UserData", user.uid);
  
	try {
	  const querySnapshot = await getDoc(userDocRef);
  
	  if (querySnapshot.exists()) {
		const data = querySnapshot.data();
		const favouriteMarkers = data.favouriteMarkers || [];
		return favouriteMarkers;
	  } else {
		console.error("No such document!");
		return [];
	  }
	} catch (error) {
	  console.error("Error getting document:", error);
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
    const userDocRef = doc(firestoreDB, "UserData", user.uid);
    
    try {
      // Try to update the document with the markerId using arrayUnion
      await updateDoc(userDocRef, {
      favouriteMarkers: arrayUnion(markerId)
      });
    } catch (error) {
      console.error("Error updating document:", error);
    
      // Check if the error is due to the document not being created
      if (error.code === "not-found") {
      try {
        // Create the document and add the markerId
        await setDoc(userDocRef, { favouriteMarkers: [markerId] });
      } catch (createError) {
        console.error("Error creating document:", createError);
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
    const userDocRef = doc(firestoreDB, "UserData", user.uid);
    
    try {
      // Try to remove the markerId from the favouriteMarkers array using arrayRemove
      await updateDoc(userDocRef, {
      favouriteMarkers: arrayRemove(markerId)
      });
    } catch (error) {
      console.error("Error updating document:", error);
    
      // Check if the error is due to the array not existing
      if (error.code === "not-found") {
      try {
        // Create an empty favouriteMarkers array
        await setDoc(userDocRef, { favouriteMarkers: [] });
      } catch (createError) {
        console.error("Error creating document:", createError);
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


export const sendVerificaiton = (email) => {
  const user = auth.currentUser;
  sendEmailVerification(user).then((res) => {
    return true;
  }).catch((err) => {
    throw false;
  })
}


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
			title
		};
		return location;
	});
	return locations;
};
