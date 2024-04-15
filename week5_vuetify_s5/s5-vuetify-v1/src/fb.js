// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-43fKVq96bJqI5_9ICavQwuAcjSNnhkM",
  authDomain: "study-vuetify-week5.firebaseapp.com",
  projectId: "study-vuetify-week5",
  storageBucket: "study-vuetify-week5.appspot.com",
  messagingSenderId: "250793869870",
  appId: "1:250793869870:web:63887ce44b375412c9d5bf",
  measurementId: "G-6WRQTDTWTY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;
// //////////////////////////////////

// import firebase from "firebase/app";
// import "firebase/database";

// const config = {
//   apiKey: "AIzaSyA-43fKVq96bJqI5_9ICavQwuAcjSNnhkM",
//   authDomain: "study-vuetify-week5.firebaseapp.com",
//   databaseURL: "https://study-vuetify-week5.firebaseio.com",
//   projectId: "study-vuetify-week5",
//   storageBucket: "study-vuetify-week5.appspot.com",
//   messagingSenderId: "250793869870",
//   appId: "1:250793869870:web:63887ce44b375412c9d5bf",
//   measurementId: "G-6WRQTDTWTY",
// };

// const app1 = firebase.initializeApp(config);
// const database = app1.database();

// export default database;

// /////////////////
