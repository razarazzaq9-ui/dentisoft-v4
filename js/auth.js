import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🌐 MUST be global for HTML onclick
window.login = function () {

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {

            alert("Login successful");

            window.location.href = "dashboard.html";

        })
        .catch((error) => {

            alert("Login failed: " + error.message);
            console.log(error);
        });
};
