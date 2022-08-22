import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

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

// database instance
const db = getFirestore();

// setting items to db
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

// getting items from db

export const getCollectionAndDocument = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  // console.log(querySnapshot);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// adding user to db
export const createUserDocument = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const { displayName, uid, email } = userAuth;

  const docRef = doc(db, 'users', uid);

  const userSnapshot = await getDoc(docRef);
  // console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    try {
      await setDoc(docRef, {
        displayName,
        email,
        date: new Date(),
        ...additionalInfo,
      });
    } catch (error) {
      console.log('user not added', error);
    }
  }
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
