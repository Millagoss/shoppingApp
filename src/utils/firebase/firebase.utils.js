import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDcfmdST4P925ojZ11fUGyAqbYGRlJ5fMU',
  authDomain: 'crwn-clothing-db-83970.firebaseapp.com',
  projectId: 'crwn-clothing-db-83970',
  storageBucket: 'crwn-clothing-db-83970.appspot.com',
  messagingSenderId: '763225386734',
  appId: '1:763225386734:web:be1428292adebfd74a8dff',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
