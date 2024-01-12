// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_HXE2YQR6YVROjkxo8Ni3ivB5WtEHOFI",
  authDomain: "expense-b40e7.firebaseapp.com",
  projectId: "expense-b40e7",
  storageBucket: "expense-b40e7.appspot.com",
  messagingSenderId: "431456859383",
  appId: "1:431456859383:web:7d8645a1a1d1e853f10ff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
