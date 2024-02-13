// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZe1yP2S58oRwRW-p52-7EIwSk_-K52TA",
  authDomain: "real-time-chat-app-9a26d.firebaseapp.com",
  projectId: "real-time-chat-app-9a26d",
  storageBucket: "real-time-chat-app-9a26d.appspot.com",
  messagingSenderId: "872612761011",
  appId: "1:872612761011:web:5b7ef0e30599d3f54a8fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}