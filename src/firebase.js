import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyBN90GooDF73egXeJpFGz9417FOPEqcl5A",
  authDomain: "invertaxi-32136.firebaseapp.com",
  projectId: "invertaxi-32136",
  storageBucket: "invertaxi-32136.appspot.com",
  messagingSenderId: "542439427572",
  appId: "1:542439427572:web:340426749a02c927bb3da1",
};

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const functions = app.functions()

export { db, auth, app, functions};
