// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// For Authentification
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDenX7VElDgx0qoJdBa88y1EhNSVWhnuEM",
  authDomain: "the-bean-machine-enhanced.firebaseapp.com",
  projectId: "the-bean-machine-enhanced",
  storageBucket: "the-bean-machine-enhanced.appspot.com",
  messagingSenderId: "223304269255",
  appId: "1:223304269255:web:730588cb7036dc3fb02de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up auth and export it
export const auth = getAuth(app);