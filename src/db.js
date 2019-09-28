import firebase from 'firebase'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
  apiKey: "AIzaSyB8r1fHtAe_STqiHpCq4MFHPpmTfkftMcs",
  authDomain: "todolist-c7e88.firebaseapp.com",
  databaseURL: "https://todolist-c7e88.firebaseio.com",
  projectId: "todolist-c7e88",
  storageBucket: "todolist-c7e88.appspot.com",
  messagingSenderId: "938939390018",
  appId: "1:938939390018:web:9bebe63b3ed5ee54"
}).firestore()

