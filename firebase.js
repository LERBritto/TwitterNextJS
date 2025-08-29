import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "@firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCEij03OIpPSNVVV_xjicpXjaq9fno_FCk",
  authDomain: "twitterclone-71223.firebaseapp.com",
  projectId: "twitterclone-71223",
  storageBucket: "twitterclone-71223.firebasestorage.app",
  messagingSenderId: "513601745263",
  appId: "1:513601745263:web:bb23573f485b46e49d789a",
  measurementId: "G-79893F823P"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };