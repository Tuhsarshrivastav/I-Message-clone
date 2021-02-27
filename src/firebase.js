import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAtEP6g5R8izOrQKPf735egaxAq8gIvw2o",
  authDomain: "i-message-clone-5bf6a.firebaseapp.com",
  projectId: "i-message-clone-5bf6a",
  storageBucket: "i-message-clone-5bf6a.appspot.com",
  messagingSenderId: "937063372834",
  appId: "1:937063372834:web:67eb0b049ee008c13ed27b",
  measurementId: "G-HEX5WN0WZD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
