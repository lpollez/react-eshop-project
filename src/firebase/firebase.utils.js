import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCGiPxLnOn06O1HBKMy78hbNXPgUgbwRp8',
  authDomain: 'react-eshop-project.firebaseapp.com',
  databaseURL: 'https://react-eshop-project.firebaseio.com',
  projectId: 'react-eshop-project',
  storageBucket: 'react-eshop-project.appspot.com',
  messagingSenderId: '1072828116966',
  appId: '1:1072828116966:web:85ee9311aab7dd71d6b027'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ param: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// get current user from promise to determine if Firebase user session exists or not
// use onAuthStateChanged listener to do that
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsuscribe = auth.onAuthStateChanged(userAuth => {
      unsuscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
