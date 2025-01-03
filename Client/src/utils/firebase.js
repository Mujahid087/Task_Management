// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMDj__aXRE0OPnFMdvszogCYZhrxa1kLQ",
  authDomain: "taskmanager-9c25b.firebaseapp.com",
  projectId: "taskmanager-9c25b",
  storageBucket: "taskmanager-9c25b.firebasestorage.app",
  messagingSenderId: "83722758551",
  appId: "1:83722758551:web:1118f829398536ec727cd2",
  measurementId: "G-SYN7KDR034"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);