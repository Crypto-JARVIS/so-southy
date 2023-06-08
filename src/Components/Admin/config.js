// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider} from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_DB_API_KEY,
  authDomain: process.env.REACT_APP_DB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DB_PROJECT_ID,
  storageBucket:process.env.REACT_APP_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DB_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_DB_APP_ID,
  measurementId: process.env.REACT_APP_DB_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};