import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";

// 🔐 AUTH
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

// 🧠 FIRESTORE (DATABASE)
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";


// ================================
// 🔥 YOUR FIREBASE CONFIG
// ================================
const firebaseConfig = {
  apiKey: "AIzaSyBE48u1qeLip4OrGsx6vzvxJhYgj5vZpy0",
  authDomain: "dentisoft-89532.firebaseapp.com",
  projectId: "dentisoft-89532",
  storageBucket: "dentisoft-89532.firebasestorage.app",
  messagingSenderId: "819598110370",
  appId: "1:819598110370:web:97b8eca32f654b015771fb",
  measurementId: "G-JMFGRW3RYF"
};


// ================================
// 🚀 INIT FIREBASE
// ================================
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// ================================
// 🔗 EXPORT SERVICES (IMPORTANT)
// ================================
export const auth = getAuth(app);
export const db = getFirestore(app);
