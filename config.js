import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBe7rNXy_Ti2CbqmfE9TQvGJ7ckGANuMOY",
  authDomain: "ciclista-eletronico-b8252.firebaseapp.com",
  projectId: "ciclista-eletronico-b8252",
  storageBucket: "ciclista-eletronico-b8252.appspot.com",
  messagingSenderId: "71999303184",
  appId: "1:71999303184:web:e04fc9002f4b5795bea495"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
