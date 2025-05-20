// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4F8OldBdty2EyUESdHStT127h1An6eo0",
  authDomain: "assignment-10-auth-d9800.firebaseapp.com",
  projectId: "assignment-10-auth-d9800",
  storageBucket: "assignment-10-auth-d9800.firebasestorage.app",
  messagingSenderId: "430919395243",
  appId: "1:430919395243:web:f78d9b29a8ca45e50014ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);