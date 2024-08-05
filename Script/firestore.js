// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXunqbaRjzBeUy4YmaurLhHF8cmTwXE7o",
  authDomain: "form-2c256.firebaseapp.com",
  projectId: "form-2c256",
  storageBucket: "form-2c256.appspot.com",
  messagingSenderId: "720163435317",
  appId: "1:720163435317:web:bf246cbd76f2bf9aa7927c"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp, getDocs, onSnapshot };