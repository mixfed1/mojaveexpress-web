// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {gerFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2BODKdlvjZwbiFqOnZ82HFTLddZ0MHxk",
  authDomain: "mojaveexpress-78eec.firebaseapp.com",
  projectId: "mojaveexpress-78eec",
  storageBucket: "mojaveexpress-78eec.appspot.com",
  messagingSenderId: "372899892029",
  appId: "1:372899892029:web:bff94e47c5016e78e99354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
