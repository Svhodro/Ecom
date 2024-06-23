// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxJGJjgljpXgxoMauUP4dNrJAvkZ_bEE8",
  authDomain: "ecom-8010e.firebaseapp.com",
  projectId: "ecom-8010e",
  storageBucket: "ecom-8010e.appspot.com",
  messagingSenderId: "259585008952",
  appId: "1:259585008952:web:605f77470c8e300f0b0dcd",
  measurementId: "G-YK83L661MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
