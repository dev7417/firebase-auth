// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdx5zrSzaXO66-x3tNr7mFTyEwwogMVL0",
  authDomain: "fir-auth-6f389.firebaseapp.com",
  projectId: "fir-auth-6f389",
  storageBucket: "fir-auth-6f389.appspot.com",
  messagingSenderId: "977842366371",
  appId: "1:977842366371:web:255839bcf538825be39c16"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export  {auth,db};