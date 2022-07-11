const firebase = require('firebase')
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH,
  databaseURL: "https://guess-api-27ab5-default-rtdb.firebaseio.com",
  projectId: "guess-api-27ab5",
  storageBucket: "guess-api-27ab5.appspot.com",
  messagingSenderId: "304031227386",
  appId: "1:304031227386:web:576419f88692f431775843"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.database()

exports.database = database