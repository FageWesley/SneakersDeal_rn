// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import { getAuth,  browserSessionPersistence, setPersistence, signInWithEmailAndPassword, initializeAuth ,getReactNativePersistence} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOmdt4EpqRjHgmC_J56tazVZ5sWclrCFs",
  authDomain: "sneakersdeal-ea386.firebaseapp.com",
  projectId: "sneakersdeal-ea386",
  storageBucket: "sneakersdeal-ea386.appspot.com",
  messagingSenderId: "520968820080",
  appId: "1:520968820080:web:72f7954529ab089afb6bb5",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// ,{
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),

// });
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP,{
  persistence : getReactNativePersistence(ReactNativeAsyncStorage)
});
// export const FIREBASE_DB = getFirestore(FIREBASE_APP);
