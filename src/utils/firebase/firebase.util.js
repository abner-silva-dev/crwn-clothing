import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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
const provider = new GoogleAuthProvider();

// settings about of how make the things
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
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
      });
    } catch (error) {
      console.log('Error :', error.message);
    }
  }

  return userDocRef;
};
