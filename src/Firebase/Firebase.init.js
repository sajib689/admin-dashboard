
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBTCIm95DEh6L6sp9NpRVBwwbaD8gr5OdU",
  authDomain: "simple-firebase-auth-46de4.firebaseapp.com",
  projectId: "simple-firebase-auth-46de4",
  storageBucket: "simple-firebase-auth-46de4.firebasestorage.app",
  messagingSenderId: "619902908781",
  appId: "1:619902908781:web:22c5bc25777b810c460264",
  measurementId: "G-95VFYD0D4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth