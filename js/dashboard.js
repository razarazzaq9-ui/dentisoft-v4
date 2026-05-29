// js/dashboard.js
import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.onload = async function(){

    let snap = await getDocs(collection(db,"opd"));

    let today = new Date().toISOString().split("T")[0];
    let count = 0;

    snap.forEach(d=>{
        if(d.data().date === today) count++;
    });

    document.getElementById("daily").innerText = count;
}