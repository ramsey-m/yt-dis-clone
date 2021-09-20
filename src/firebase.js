// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase'
//import * as firebase from 'firebase';




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvKqPgnZgajRO8YAyBpaxsOVkDkxRTzkk",
  authDomain: "only-one-858de.firebaseapp.com",
  projectId: "only-one-858de",
  storageBucket: "only-one-858de.appspot.com",
  messagingSenderId: "125523885879",
  appId: "1:125523885879:web:4a9d15ff7adf9906aba4b2",
  measurementId: "G-EZEGY47LQ6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage };
export default db;