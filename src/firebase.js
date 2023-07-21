// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBykkc7ky4P9D4fGnaZLNGE-M3Xka2X14c',
  authDomain: 'aala-2782b.firebaseapp.com',
  projectId: 'aala-2782b',
  storageBucket: 'aala-2782b.appspot.com',
  messagingSenderId: '250878128857',
  appId: '1:250878128857:web:85f9dc042f8deb469704c8',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
