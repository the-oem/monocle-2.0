import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBZnAMeaJQPnyJ6t-LiXaiOUBrZiA5_S_Y',
  authDomain: 'monocle-f260a.firebaseapp.com',
  databaseURL: 'https://monocle-f260a.firebaseio.com',
  projectId: 'monocle-f260a',
  storageBucket: '',
  messagingSenderId: '489669519853',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = () => auth.signInWithPopup(googleProvider);

export const signOut = () => auth.signOut();

export default firebase;
