import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXLJTso6sIfykqGVi0SmQM0vxPtv7X8JE",
  authDomain: "baatein-karo-f18d6.firebaseapp.com",
  projectId: "baatein-karo-f18d6",
  storageBucket: "baatein-karo-f18d6.appspot.com",
  messagingSenderId: "604735196096",
  appId: "1:604735196096:web:6c4128ea98124fff451625",
  measurementId: "G-C6T9YYHGV3",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
