
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBE48u1qeLip4OrGsx6vzvxJhYgj5vZpy0",
    authDomain: "dentisoft-89532.firebaseapp.com",
    projectId: "dentisoft-89532",
    storageBucket: "dentisoft-89532.firebasestorage.app",
    messagingSenderId: "819598110370",
    appId: "1:819598110370:web:97b8eca32f654b015771fb",
    measurementId: "G-JMFGRW3RYF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
