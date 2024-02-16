import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAIP2rVCME7DYH3AdASxY6bq8rhVZ9BcY4",
    authDomain: "blog-vue3-860a5.firebaseapp.com",
    projectId: "blog-vue3-860a5",
    storageBucket: "blog-vue3-860a5.appspot.com",
    messagingSenderId: "727981944028",
    appId: "1:727981944028:web:f601094fb70a3eb40dd819"
  };

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectAuth, projectFirestore, timestamp};