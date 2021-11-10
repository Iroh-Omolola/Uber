// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCdO86Y8ZrW7ecw8DVunQ3YA8WgHQsXIfA",
  authDomain: "uber-clone-aa0b9.firebaseapp.com",
  projectId: "uber-clone-aa0b9",
  storageBucket: "uber-clone-aa0b9.appspot.com",
  messagingSenderId: "537359643300",
  appId: "1:537359643300:web:75790a86322ddee0e36c31",
  measurementId: "G-3EMM9SZ94R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, Provider, auth}
