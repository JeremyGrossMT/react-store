import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAovIAkWs7cVUrwoVz5CNJhvj3EwoiDC0k",
  authDomain: "react-crwn-db.firebaseapp.com",
  databaseURL: "https://react-crwn-db.firebaseio.com",
  projectId: "react-crwn-db",
  storageBucket: "",
  messagingSenderId: "908222711557",
  appId: "1:908222711557:web:e77a176d65ab3e71"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;