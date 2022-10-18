import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCokhDvy1EBpvHKtCH6DOs5hdpx-fMczBI",
  authDomain: "mock-restaur.firebaseapp.com",
  databaseURL:"https://mock-restaurant.firebaseio.com",
  projectId: "mock-restaur",
  storageBucket: "mock-restaur.appspot.com",
  messagingSenderId: "439864820050",
  appId: "1:439864820050:web:a5a267f50b87820d997a8b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export default app;