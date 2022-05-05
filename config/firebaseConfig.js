import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  { getFirestore, collection } from firbase/getFirestore;
 
const firebaseConfig = {
  apiKey: "AIzaSyAjFiHspHycMyexeiIJX7srwrvQsdx048w",
  authDomain: "my-way-c4beb.firebaseapp.com",
  projectId: "my-way-c4beb",
  storageBucket: "my-way-c4beb.appspot.com",
  messagingSenderId: "606398663837",
  appId: "1:606398663837:web:a6901fa2fa5880bcd0d874",
  measurementId: "G-8JP23TF0F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db,'users');
const analytics = getAnalytics(app);