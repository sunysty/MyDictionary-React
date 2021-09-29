// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCexpXJKg2Ze0bHDYGhelKQVwJvFtY287Y",
  authDomain: "dictionary-be810.firebaseapp.com",
  projectId: "dictionary-be810",
  storageBucket: "dictionary-be810.appspot.com",
  messagingSenderId: "584795186457",
  appId: "1:584795186457:web:e5ceae78f0a1433ed35188",
  measurementId: "G-NKE02YWYR3",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
