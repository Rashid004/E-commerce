/** @format */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGnVIv420W7SEg3bt_Kv9Sb8XD5vvwtG0",
  authDomain: "shopeasy-32df7.firebaseapp.com",
  projectId: "shopeasy-32df7",
  storageBucket: "shopeasy-32df7.appspot.com",
  messagingSenderId: "638023751643",
  appId: "1:638023751643:web:1bd45080aa3e4b29fcf9fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };
