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
import firebase from 'firebase/compat/app';
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

function writeUserData(name, imageUrl, price, id) {
  const db = FIREBASE_DATABASE;
  set(ref(db, "products/" + id), {
    title: name,
    price: price,
    image: imageUrl,
  });
}
// get products by brand
export function getItemsByBrand(brand) {
  const products = ref(FIREBASE_DATABASE, "products/");
  const productsArray = [];
  let value;
  onValue(products, (snapshot) => {
    const data = snapshot.val();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        value = data[key].brand;
      }

      if (value == brand) {
        productsArray.push(data[key]);
        // console.log(productsArray)
      }
    }
  });

  return productsArray;
}

// get all products
export default function getAllProducts(){
  const products = ref(FIREBASE_DATABASE, "products/");
  const productsArray = [];
  onValue(products, (snapshot) => {
    const data = snapshot.val();
    for (let key in data) {
      productsArray.push(data[key]); 
    }
  });

  return productsArray;
}


