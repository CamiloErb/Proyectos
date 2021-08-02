import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAUx1IPJ1QkI_6fJlFqFGLmojbR3XO9808",
  authDomain: "react-redux-firebase-cru-21634.firebaseapp.com",
  projectId: "react-redux-firebase-cru-21634",
  storageBucket: "react-redux-firebase-cru-21634.appspot.com",
  messagingSenderId: "665648852949",
  appId: "1:665648852949:web:441a6e9d327e6cf240175c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
