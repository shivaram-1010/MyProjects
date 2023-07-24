import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDmUKOs6gyrrDjNcXxbeC0XG3RgswFp-cg",
  authDomain: "e-clone-56572.firebaseapp.com",
  projectId: "e-clone-56572",
  storageBucket: "e-clone-56572.appspot.com",
  messagingSenderId: "70237264576",
  appId: "1:70237264576:web:152502ad2e7d7ffb33eb25",
  measurementId: "G-54VSMHDBD8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export { db, auth };