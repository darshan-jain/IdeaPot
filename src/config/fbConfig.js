import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD41-HTO6vRBYUOeAUdxLgKZo9KQfUaCog",
    authDomain: "ideapot-ee9b1.firebaseapp.com",
    databaseURL: "https://ideapot-ee9b1.firebaseio.com",
    projectId: "ideapot-ee9b1",
    storageBucket: "ideapot-ee9b1.appspot.com",
    messagingSenderId: "56180511274",
    appId: "1:56180511274:web:99fd80c1f0e4557f4e2953",
    measurementId: "G-JEDCEZCHEL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;