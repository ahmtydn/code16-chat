import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC_HbbYDy8y8aYLeuubu6ZT2VQob7leKU",
  authDomain: "code16-chat.firebaseapp.com",
  projectId: "code16-chat",
  storageBucket: "code16-chat.appspot.com",
  messagingSenderId: "871045181566",
  appId: "1:871045181566:web:752c10556906b14832282f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
