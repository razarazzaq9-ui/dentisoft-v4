// js/opd.js
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addOPD = async function(){

    await addDoc(collection(db,"opd"),{
        mr: mr.value,
        date: new Date().toISOString().split("T")[0],
        complaint: complaint.value,
        diagnosis: diagnosis.value,
        procedure: procedure.value,
        payment: payment.value,
        status: "Active"
    });

    alert("OPD Saved");
}