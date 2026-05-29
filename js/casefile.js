// js/casefile.js
import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.loadCaseFile = async function(mr){

    let patients = await getDocs(collection(db,"patients"));
    let opd = await getDocs(collection(db,"opd"));

    let p, visits = [];

    patients.forEach(d=>{
        if(d.data().mr === mr) p = d.data();
    });

    opd.forEach(d=>{
        if(d.data().mr === mr) visits.push(d.data());
    });

    document.getElementById("case").innerHTML = `
        <h2>${p.name} (${p.mr})</h2>

        <h3>OPD History</h3>

        ${visits.map(v=>`
            <div class="card">
                ${v.date} - ${v.procedure} - Rs ${v.payment}
            </div>
        `).join("")}
    `;
}