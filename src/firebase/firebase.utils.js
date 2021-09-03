import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBarjXUZrEGAI0oXnPBSHFIAyIdPASHvx4',
  authDomain: 'crwn-db-357d0.firebaseapp.com',
  projectId: 'crwn-db-357d0',
  storageBucket: 'crwn-db-357d0.appspot.com',
  messagingSenderId: '108015157106',
  appId: '1:108015157106:web:214f1a91596d96574827eb',
  measurementId: 'G-VCEEE86PZC',
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signInWithGoogle = signInWithPopup(auth, provider);
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log({ user, token });
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     console.log({ errorCode, errorMessage, email, credential });
//   });

export default firebase;
