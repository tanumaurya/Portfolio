// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKJ3_HlizRJC9MP_784R6rXcMH2SrmdY",
  authDomain: "istareels-d2520.firebaseapp.com",
  projectId: "istareels-d2520",
  storageBucket: "istareels-d2520.appspot.com",
  messagingSenderId: "847769973322",
  appId: "1:847769973322:web:53f57354ed907186cbecb3"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export default firebase;
export const auth = firebase.auth();

