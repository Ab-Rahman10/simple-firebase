// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLiGJZgfb3fTVTSRRoCC2iCK7ieMydV-M",
  authDomain: "simple-firebase2-be16c.firebaseapp.com",
  projectId: "simple-firebase2-be16c",
  storageBucket: "simple-firebase2-be16c.firebasestorage.app",
  messagingSenderId: "781691908807",
  appId: "1:781691908807:web:9da85f3eb245f4112dc4e2",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;
