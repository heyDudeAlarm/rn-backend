// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA697BjAp5s82KM-7tGQUk-zxgeNJp-YVc",
  authDomain: "reactnativeheydude.firebaseapp.com",
  projectId: "reactnativeheydude",
  storageBucket: "reactnativeheydude.appspot.com",
  messagingSenderId: "783196079785",
  appId: "1:783196079785:web:9111671d0879629e518bb8",
  measurementId: "G-BX3ELF7PDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};