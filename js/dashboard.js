// js/dashboard.js
import { db } from "./firebase.js";
import { collection, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.onload = async function () {

    try {

        const snap = await getDocs(collection(db, "opd"));

        const today = new Date().toISOString().split("T")[0];

        let count = 0;

        snap.forEach(doc => {

            const data = doc.data();

            // 🔥 SAFE DATE HANDLING
            let visitDate = "";

            if (data.date) {
                visitDate = data.date.toString().split("T")[0];
            }

            if (visitDate === today) {
                count++;
            }
        });

        const el = document.getElementById("daily");
        if (el) {
            el.innerText = count;
        } else {
            console.warn("Element #daily not found in HTML");
        }

    } catch (error) {
        console.error("Dashboard error:", error);
    }
};
