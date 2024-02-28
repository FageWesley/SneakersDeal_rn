// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
// import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOmdt4EpqRjHgmC_J56tazVZ5sWclrCFs",
  authDomain: "sneakersdeal-ea386.firebaseapp.com",
  databaseURL:
    "https://sneakersdeal-ea386-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sneakersdeal-ea386",
  storageBucket: "sneakersdeal-ea386.appspot.com",
  messagingSenderId: "520968820080",
  appId: "1:520968820080:web:72f7954529ab089afb6bb5",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Import Database
export const FIREBASE_DATABASE = getDatabase(FIREBASE_APP);
// export const reference = firebase.app.database("https://sneakersdeal-ea386-default-rtdb.europe-west1.firebasedatabase.app").ref("products");
export function writeUserData(name, imageUrl, price, id) {
  const db = FIREBASE_DATABASE;
  set(ref(db, "products/" + id), {
    title: name,
    price: price,
    image: imageUrl,
  });
}
