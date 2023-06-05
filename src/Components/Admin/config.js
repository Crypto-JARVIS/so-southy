// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDxAkCavPse-jugFL-OK6BIoIERIGlCeAs",

  authDomain: "you-foodie-jarvis.firebaseapp.com",

  projectId: "you-foodie-jarvis",

  storageBucket: "you-foodie-jarvis.appspot.com",

  messagingSenderId: "237031962997",

  appId: "1:237031962997:web:2921ec7268e4a6063a3b3c",

  measurementId: "G-ZXERY3E18G"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);