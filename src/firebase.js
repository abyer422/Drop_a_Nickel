import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBPPyN6ozRG30An7E-Nzy9PN4Vi04W1T-o",
  authDomain: "drop-a-nickel-pro-shop.firebaseapp.com",
  projectId: "drop-a-nickel-pro-shop",
  storageBucket: "drop-a-nickel-pro-shop.appspot.com",
  messagingSenderId: "170410912971",
  appId: "1:170410912971:web:3a1b8d7764375a666c7f4e",
  measurementId: "G-PGHWD1YNP3"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };