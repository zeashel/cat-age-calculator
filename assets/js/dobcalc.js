/*
 * Copyright (c) 2026. Zahra A. S., All rights reserved.
 * This design is the intellectual property of Zahra A. S.
 * Unauthorized use, reproduction, or distribution of this design is prohibited.
 * For permissions, contact 182934048+zeashel@users.noreply.github.com
 */

import { catToHumanAge } from "./catagecalc.js";

const inputElementDOB = document.getElementById("catDOB"); // dob input
const outputElement = document.getElementById("convertedAge"); // output

function liveInputHandlerDOB() {
    const userInput = inputElementDOB.value;
    const catAge = dateCalculator(userInput);
    outputElement.innerHTML = catToHumanAge(catAge);
}

function dateCalculator(dobValue) {
    const [catYear, catMonth, catDate] = dobValue.split("-").map(Number); // cat dob values

    // current date values
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1); // 0-11 so we increment by 1
    const date = String(now.getDate()); // 1-31

    // DEBUG
    console.log(catYear, catMonth, catDate);
    console.log(year, month, date);

    // TEMP
    return catDate;
}

// run on page load
document.addEventListener("DOMContentLoaded", liveInputHandlerDOB);

// run on form input change
inputElementDOB.addEventListener("input", liveInputHandlerDOB);
