import { initializeApp } from 'firebase/app';
import firebase from "firebase/app";
import 'firebase/auth';

const fireConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
}

const firebaseConfig = {
  apiKey: "AIzaSyCIILknRopKIT-gECTBYrLpabSPhA4HN04",
  authDomain: "estate-3e00f.firebaseapp.com",
  projectId: "estate-3e00f",
  storageBucket: "estate-3e00f.appspot.com",
  messagingSenderId: "16628603342",
  appId: "1:16628603342:web:3bd6cf2aa29ceccb16339f",
  measurementId: "G-CX3X3DLNDB"
};

const app = initializeApp(firebaseConfig);

export {firebase}
