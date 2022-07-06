import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

// firebase instance created
const firebaseConfig = {
  apiKey: 'AIzaSyDcfmdST4P925ojZ11fUGyAqbYGRlJ5fMU',
  authDomain: 'crwn-clothing-db-83970.firebaseapp.com',
  projectId: 'crwn-clothing-db-83970',
  storageBucket: 'crwn-clothing-db-83970.appspot.com',
  messagingSenderId: '763225386734',
  appId: '1:763225386734:web:be1428292adebfd74a8dff',
};
const app = initializeApp(firebaseConfig);

// user google authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// user data database
const userDb = getFirestore();

export const createUserDocument = async ({ uid, displayName, email }) => {
  const docRef = doc(userDb, 'users', uid);

  const userSnapshot = await getDoc(docRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    try {
      await setDoc(docRef, { displayName, email, date: new Date() });
    } catch (error) {
      console.log('user not added', error);
    }
  }
  return docRef;
};
