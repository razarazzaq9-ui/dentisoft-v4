// js/patients.js
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addPatient = async function(){

    let mr = "KDC" + Date.now().toString().slice(-5);

    await addDoc(collection(db,"patients"),{
        mr,
        name: name.value,
        age: age.value,
        phone: phone.value,
        created: new Date()
    });

    alert("Saved: " + mr);
}