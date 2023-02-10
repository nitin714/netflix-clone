import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGcuo033-lR6HBOEnsnj8_ykN1N_oHVWw",
  authDomain: "netflicks-1f991.firebaseapp.com",
  projectId: "netflicks-1f991",
  storageBucket: "netflicks-1f991.appspot.com",
  messagingSenderId: "157200560548",
  appId: "1:157200560548:web:eb373a6ef20468fd509131",
  measurementId: "G-V2PP0ZF6VM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;