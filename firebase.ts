// Import the functions you need from the SDKs you need
import { getApps, getApp,initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOHZXzPxgkJ_vzTUkEy-t1ce8e2a1j4No",
  authDomain: "practice-93f3a.firebaseapp.com",
  projectId: "practice-93f3a",
  storageBucket: "practice-93f3a.appspot.com",
  messagingSenderId: "492765806430",
  appId: "1:492765806430:web:37792b47c93fcdc60a19cf",
  measurementId: "G-TTXZCQT27X"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
