import firebase from 'firebase';

// Initialize Firebase

export const initApp() {
  const config = {
    apiKey: 'AIzaSyBZnAMeaJQPnyJ6t-LiXaiOUBrZiA5_S_Y',
    authDomain: 'monocle-f260a.firebaseapp.com',
    databaseURL: 'https://monocle-f260a.firebaseio.com',
    projectId: 'monocle-f260a',
    storageBucket: '',
    messagingSenderId: '489669519853',
  };
  firebase.initializeApp(config);
}
