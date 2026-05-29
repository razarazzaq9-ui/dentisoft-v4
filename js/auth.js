// js/auth.js
import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function(){

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
        window.location = "dashboard.html";
    })
    .catch(err => alert(err.message));
}
