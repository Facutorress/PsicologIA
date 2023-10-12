// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Importa getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8xlQxCjnwYDUcSwAVkWnYYZrXuhwXZ3o",
  authDomain: "psicologia2-bccb4.firebaseapp.com",
  projectId: "psicologia2-bccb4",
  storageBucket: "psicologia2-bccb4.appspot.com",
  messagingSenderId: "665124678068",
  appId: "1:665124678068:web:1c52891cd4f7a88e132ae1",
  measurementId: "G-63PQ1Y5J4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);  // Inicializa e exporta Firestore
