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

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA-43fKVq96bJqI5_9ICavQwuAcjSNnhkM",
  authDomain: "study-vuetify-week5.firebaseapp.com",
  projectId: "study-vuetify-week5",
  storageBucket: "study-vuetify-week5.appspot.com",
  messagingSenderId: "250793869870",
  appId: "1:250793869870:web:63887ce44b375412c9d5bf",
  measurementId: "G-6WRQTDTWTY",
};

const firebaseApp = initializeApp(config);
const db = getFirestore(firebaseApp);

// Set Firestore settings
db.settings({ timestampsInSnapshots: true });

export default db;
