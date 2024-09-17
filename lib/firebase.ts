import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBGCCwD21JK-hSUGwGHlx1yP0qBg5CkpJg",
  authDomain: "my-quick-fal-app-firebase-1.firebaseapp.com",
  projectId: "my-quick-fal-app-firebase-1",
  storageBucket: "my-quick-fal-app-firebase-1.appspot.com",
  messagingSenderId: "391278500178",
  appId: "1:391278500178:web:cd49331d0c8cf11e0e828b",
  measurementId: "G-X5F5Z27WR8"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics };