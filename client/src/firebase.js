// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-c5a92.firebaseapp.com",
  projectId: "mern-estate-c5a92",
  storageBucket: "mern-estate-c5a92.firebasestorage.app",
  messagingSenderId: "1045678403954",
  appId: "1:1045678403954:web:dec9cacd771305f6afedeb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);