// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyACnL6YiPgyGambppatUBZRflZBxYRPLZI",
  // authDomain: "beauty-e6456.firebaseapp.com",
  // projectId: "beauty-e6456",
  // storageBucket: "beauty-e6456.appspot.com",
  // messagingSenderId: "857038169743",
  // appId: "1:857038169743:web:f18aba7c38deab68fc32fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
