import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZw6iviEokd0_f1XRMZsIknE7PhvD6X54",
  authDomain: "chat2-e61e6.firebaseapp.com",
  projectId: "chat2-e61e6",
  storageBucket: "chat2-e61e6.appspot.com",
  messagingSenderId: "108502448033",
  appId: "1:108502448033:web:66aa0bf7e75b8487c87de0",
  measurementId: "G-KXZ0FMF4ES"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth()
export const storage = getStorage();
export const db = getFirestore()
