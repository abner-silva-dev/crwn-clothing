import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//info about of owner instance in firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDC5jRJ3GK791wsgJyUIVVm_KsYFeCJSlw',
  authDomain: 'crwn-clothing-db-20b96.firebaseapp.com',
  projectId: 'crwn-clothing-db-20b96',
  storageBucket: 'crwn-clothing-db-20b96.appspot.com',
  messagingSenderId: '302266384313',
  appId: '1:302266384313:web:c5ead929f528d55cea0068',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// instance for sign in with google
const googleProvider = new GoogleAuthProvider();

// settings about of how make the things
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

//make a tracing about of a our application
export const auth = getAuth();

//render pop up of google
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//redirect a new window of google
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//contains information of dabase firestore
export const db = getFirestore();

//function allow create user
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('Error :', error.message);
    }
  }

  return userDocRef;
};

//function create an auth of user
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// export const getCollectionData = async (collection, docC) => {
//   const docRef = doc(db, collection, docC);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log('Document data:', docSnap.data());
//   } else {
//     console.log('No such document!');
//   }
// };
