import firebase from "firebase";

import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBabvLC6Ddh6ZIpZkywfjvqFrDS57bPCm4",
    authDomain: "excel-9ec17.firebaseapp.com",
    projectId: "excel-9ec17",
    storageBucket: "excel-9ec17.appspot.com",
    messagingSenderId: "467387755916",
    appId: "1:467387755916:web:866023010f8af813a77aa9"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default  db