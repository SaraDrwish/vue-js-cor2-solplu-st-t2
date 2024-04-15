// import firebase from "firebase/app";
// import "firebase/app";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const config = {
//   apiKey: "AIzaSyA-43fKVq96bJqI5_9ICavQwuAcjSNnhkM",
//   authDomain: "study-vuetify-week5.firebaseapp.com",
//   projectId: "study-vuetify-week5",
//   storageBucket: "study-vuetify-week5.appspot.com",
//   messagingSenderId: "250793869870",
//   appId: "1:250793869870:web:63887ce44b375412c9d5bf",
//   measurementId: "G-6WRQTDTWTY",
// };

// const firebaseApp = initializeApp(config);
// // const db = firebase.firestore();
// const db = getFirestore(firebaseApp);

// // const db = getFirestore(firebaseApp);
// db.settings({ timestampsInSnapshots: true });

// export default db;

// // //////////

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const config = {
//   apiKey: "AIzaSyA-43fKVq96bJqI5_9ICavQwuAcjSNnhkM",
//   authDomain: "study-vuetify-week5.firebaseapp.com",
//   projectId: "study-vuetify-week5",
//   storageBucket: "study-vuetify-week5.appspot.com",
//   messagingSenderId: "250793869870",
//   appId: "1:250793869870:web:63887ce44b375412c9d5bf",
//   measurementId: "G-6WRQTDTWTY",
// };

// const firebaseApp = initializeApp(config);
// const db = getFirestore(firebaseApp);

// // Set Firestore settings
// db.settings({ timestampsInSnapshots: true });

// export default db;

// //////////////////////////////////

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA-43fKVq96bJqI5_9ICavQwuAcjSNnhkM",
//   authDomain: "study-vuetify-week5.firebaseapp.com",
//   projectId: "study-vuetify-week5",
//   storageBucket: "study-vuetify-week5.appspot.com",
//   messagingSenderId: "250793869870",
//   appId: "1:250793869870:web:63887ce44b375412c9d5bf",
//   measurementId: "G-6WRQTDTWTY",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default analytics;

// //////////////////////////////////

// import firebase from "firebase/app";
// import "firebase/database";

// // import database from "./fb.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyA-43fKVq96bJqI5_9ICavQwuAcjSNnhkM",
//   authDomain: "study-vuetify-week5.firebaseapp.com",
//   databaseURL: "https://study-vuetify-week5.firebaseio.com",
//   projectId: "study-vuetify-week5",
//   storageBucket: "study-vuetify-week5.appspot.com",
//   messagingSenderId: "250793869870",
//   appId: "1:250793869870:web:63887ce44b375412c9d5bf",
//   measurementId: "G-6WRQTDTWTY",
// };

// const app = firebase.initializeApp(firebaseConfig);
// const database = app.database();

// export default database;

// //////////////////////

import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-43fKVq96bJqI5_9ICavQwuAcjSNnhkM",
  authDomain: "study-vuetify-week5.firebaseapp.com",
  databaseURL: "https://study-vuetify-week5.firebaseio.com",
  projectId: "study-vuetify-week5",
  storageBucket: "study-vuetify-week5.appspot.com",
  messagingSenderId: "250793869870",
  appId: "1:250793869870:web:63887ce44b375412c9d5bf",
  measurementId: "G-6WRQTDTWTY",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

export default database;
