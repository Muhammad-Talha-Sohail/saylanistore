// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu6LDnMBThfgdBExcFXIps1kOGQZjaas0",
  authDomain: "saylani-store01.firebaseapp.com",
  projectId: "saylani-store01",
  storageBucket: "saylani-store01.appspot.com",
  messagingSenderId: "547708586866",
  appId: "1:547708586866:web:56b6d8ac21ba27d82b2beb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);