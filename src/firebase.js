// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGrL-MCXRvDXM887x3xQhqSRhC_9Pq54E",
  authDomain: "e-commerce-e7baf.firebaseapp.com",
  projectId: "e-commerce-e7baf",
  storageBucket: "e-commerce-e7baf.appspot.com",
  messagingSenderId: "553878968121",
  appId: "1:553878968121:web:4d76340e585ae57604bae8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {auth,db}