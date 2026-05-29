import { db } from "./firebase.js";
import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addOPD = async function () {

    // ✅ PROPER ELEMENT FETCHING
    const mr = document.getElementById("mr").value;
    const complaint = document.getElementById("complaint").value;
    const diagnosis = document.getElementById("diagnosis").value;
    const procedure = document.getElementById("procedure").value;
    const payment = document.getElementById("payment").value;

    // 🚨 VALIDATION (IMPORTANT)
    if (!mr) {
        alert("MR is required");
        return;
    }

    try {

        await addDoc(collection(db, "opd"), {
            mr,
            date: new Date().toISOString().split("T")[0],
            complaint,
            diagnosis,
            procedure,
            payment,
            status: "Active"
        });

        alert("OPD Saved Successfully");

        // optional reset
        document.getElementById("complaint").value = "";
        document.getElementById("diagnosis").value = "";
        document.getElementById("procedure").value = "";
        document.getElementById("payment").value = "";

    } catch (error) {
        console.error("OPD Save Error:", error);
        alert("Failed to save OPD");
    }
};
