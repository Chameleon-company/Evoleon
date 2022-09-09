import { signInWithEmailAndPassword, createUserWithEmailAndPassword, Auth, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


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

//Sign in for an existing user
export const userSignIn = (email, password)=>{
  const authInfo = auth;
  signInWithEmailAndPassword(authInfo, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Logged in with:", user.email);
    console.log(authInfo.currentUser);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

//Sign up for a new user
export const userSignUp = (email, password)=>{
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Created new account for:', user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}






