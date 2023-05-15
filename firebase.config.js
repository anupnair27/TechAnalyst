// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd7jKn_szFVAg0gphyNkdyEdMREgQ22vY",
  authDomain: "new-project-49589.firebaseapp.com",
  projectId: "new-project-49589",
  storageBucket: "new-project-49589.appspot.com",
  messagingSenderId: "726339476911",
  appId: "1:726339476911:web:74bdddf7b72d00b5b7e35a",
  measurementId: "G-43NP6JQFXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
