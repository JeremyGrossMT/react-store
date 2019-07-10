import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';

const config = {
  apiKey: "AIzaSyAovIAkWs7cVUrwoVz5CNJhvj3EwoiDC0k",
  authDomain: "react-crwn-db.firebaseapp.com",
  databaseURL: "https://react-crwn-db.firebaseio.com",
  projectId: "react-crwn-db",
  storageBucket: "",
  messagingSenderId: "908222711557",
  appId: "1:908222711557:web:e77a176d65ab3e71"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email }= userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (errer) {
      console.log('errer creating user', errer.message);
    }
  }
  return userRef;
  //console.log(firestore.doc('users/4'))
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;