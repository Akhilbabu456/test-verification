import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVC1t1aC_Tau962bHT2ooqWam8JaxpSqU",
  authDomain: "otp-verification-f659a.firebaseapp.com",
  projectId: "otp-verification-f659a",
  storageBucket: "otp-verification-f659a.appspot.com",
  messagingSenderId: "221554185597",
  appId: "1:221554185597:web:0d8327f571bf5ba55ba814",
  measurementId: "G-0QE2VZ1372",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
