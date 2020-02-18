import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBU4yr0J3vRe8vXy0s_K4UQFaUS_ICz1iQ',
  authDomain: 'react-eshop-project-db.firebaseapp.com',
  databaseURL: 'https://react-eshop-project-db.firebaseio.com',
  projectId: 'react-eshop-project-db',
  storageBucket: 'react-eshop-project-db.appspot.com',
  messagingSenderId: '366374399017',
  appId: '1:366374399017:web:080505993268adf6cf4038',
  measurementId: 'G-ZDS3L423E0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ param: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
