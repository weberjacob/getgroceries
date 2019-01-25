import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "YOUR KEYS HERE",
  authDomain: "YOUR KEYS HERE",
  databaseURL: "YOUR KEYS HERE"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
