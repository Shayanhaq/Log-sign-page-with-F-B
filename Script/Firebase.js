// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { 
  getAuth ,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXunqbaRjzBeUy4YmaurLhHF8cmTwXE7o",
  authDomain: "form-2c256.firebaseapp.com",
  projectId: "form-2c256",
  storageBucket: "form-2c256.appspot.com",
  messagingSenderId: "720163435317",
  appId: "1:720163435317:web:bf246cbd76f2bf9aa7927c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged}
