import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAh1QSvEAhDqvZnOo_zuFuRrTK8y-cDhkg",
    authDomain: "crown-eco.firebaseapp.com",
    projectId: "crown-eco",
    storageBucket: "crown-eco.appspot.com",
    messagingSenderId: "477805299972",
    appId: "1:477805299972:web:955e398d2b1724bdeaa851",
    measurementId: "G-0PZWRJHD10"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firestore.doc('users/1234djfrjfjf'));
};
  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
