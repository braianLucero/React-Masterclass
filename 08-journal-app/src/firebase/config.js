// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGwkjeN5FNtokBkUKwA4pIm9mrO5vB6Tw",
  authDomain: "react-cursos-ac5e0.firebaseapp.com",
  projectId: "react-cursos-ac5e0",
  storageBucket: "react-cursos-ac5e0.appspot.com",
  messagingSenderId: "657023531645",
  appId: "1:657023531645:web:9201ea9d6a0f4944a0cf14",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
