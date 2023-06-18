import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB5_2oLtuY6qWkB-X1izT_ofIL1dcoOC7U",
  authDomain: "bibel-19fb0.firebaseapp.com",
  projectId: "bibel-19fb0",
  storageBucket: "bibel-19fb0.appspot.com",
  messagingSenderId: "116871497083",
  appId: "1:116871497083:web:d24cdc180fa708202fa9de",
  measurementId: "G-M5E03X0VSR"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
