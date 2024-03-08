// Import the functions you need from the SDKs you need
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCArNmcSL5FLjZpa6oab6Ii669sDWKXO60",
  authDomain: "blogging-website-d3255.firebaseapp.com",
  projectId: "blogging-website-d3255",
  storageBucket: "blogging-website-d3255.appspot.com",
  messagingSenderId: "728253741410",
  appId: "1:728253741410:web:1b3e4d6d5fb227188a543b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//googel auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user= null;
    await signInWithPopup(auth, provider).then((result)=>{
        user = result.user;
    })
    .catch((err)=>{
        console.log(err)
    })

    return user;
}