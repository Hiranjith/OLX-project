import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC6qo8_UDJfXM-GG3yfgeuhQzJ92uEAFXc",
    authDomain: "olx-db-83d0b.firebaseapp.com",
    projectId: "olx-db-83d0b",
    storageBucket: "olx-db-83d0b.appspot.com",
    messagingSenderId: "75930350377",
    appId: "1:75930350377:web:b73524484ff8024ae37d38",
    measurementId: "G-GFFLBG0GR2"
  };

  export default firebase.initializeApp(firebaseConfig);
