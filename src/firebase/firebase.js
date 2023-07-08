// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIROfzmDKV7i1ALaO9vA7U6GDostWz104",
  authDomain: "fitness-tab.firebaseapp.com",
  projectId: "fitness-tab",
  storageBucket: "fitness-tab.appspot.com",
  messagingSenderId: "186647364452",
  appId: "1:186647364452:web:4264f224d1d30f77623071",
  measurementId: "G-3MXMXKC1KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);