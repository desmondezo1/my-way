import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  { getFirestore, collection } from firbase/getFirestore;
require('dotenv').config()
 
const firebaseConfig = {
  apiKey: process.env('FIREBASE_APIKEY'),
  authDomain: process.env('FIREBASE_AUTHDOMAIN'),
  projectId: process.env('FIREBASE_PROJECTID'),
  storageBucket: process.env('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: process.env('FIREBASE_MESSAGING_SENDERID'),
  appId: process.env('FIREBASE_APPID'),
  measurementId: process.env('FIREBASE_MEASUREMENTID')
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db,'users');
const analytics = getAnalytics(app);