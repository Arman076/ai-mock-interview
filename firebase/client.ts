import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFbe80neb0D2EtwJ30FcRcH67fS1yUeuY",
  authDomain: "mock-ai-interview-87826.firebaseapp.com",
  projectId: "mock-ai-interview-87826",
  storageBucket: "mock-ai-interview-87826.firebasestorage.app",
  messagingSenderId: "953213617899",
  appId: "1:953213617899:web:d82298fbb9c6be217fe0ae",
  measurementId: "G-BQ5253KFJM"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);


