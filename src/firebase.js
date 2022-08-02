// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe-zthcpBqNHUDgw_AYeDbG8pPYghzZoQ",
  authDomain: "instagram-web-29c4d.firebaseapp.com",
  projectId: "instagram-web-29c4d",
  storageBucket: "instagram-web-29c4d.appspot.com",
  messagingSenderId: "797147980072",
  appId: "1:797147980072:web:fc6b62523eab627ce4301d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}