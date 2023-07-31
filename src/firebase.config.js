// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  console.log(import.meta.env.VITE_AUTHDOMAIN);
const firebaseConfig = {
  apiKey: "AIzaSyDBppkmwL88VNoaSBwX4U4wPQq0i_Vujy4",
  authDomain: "dragon-news-8cc78.firebaseapp.com",
  projectId: "dragon-news-8cc78",
  storageBucket: "dragon-news-8cc78.appspot.com",
  messagingSenderId: "820838138777",
  appId: "1:820838138777:web:64b7fddfec391811248908",
  measurementId: "G-5FB3FPXGE8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;