/*
 * Copyright (c) 2026. Zahra A. S., All rights reserved.
 * This design is the intellectual property of Zahra A. S.
 * Unauthorized use, reproduction, or distribution of this design is prohibited.
 * For permissions, contact 182934048+zeashel@users.noreply.github.com
 */

const inputElement = document.getElementById("catAge"); // age int input
const inputElementDOB = document.getElementById("catDOB"); // dob input
const outputElement = document.getElementById("convertedAge"); // output

function liveInputHandler() {
    const userInput = inputElement.value;
    outputElement.innerHTML = catToHumanAge(userInput);
}

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

function catToHumanAge(catAge) {
    pre = '<span style="color:var(--acc-fg);">';
    post = "</span>";

    // sanitize
    if (catAge == "") {
        return "unknown";
    } else if (catAge < 0) {
        return "int too small";
    } else if (catAge > 999) {
        return "int too large";
    }

    // 0 <= x < 1
    else if (catAge >= 0 && catAge < 1) {
        return `${pre}${Math.round(15 * catAge)}${post} years old`;
    }
    else if (catAge == 1) {
        return `${pre}15${post} years old`;
    }
    // 1 < x < 2
    else if (catAge > 1 && catAge < 2) {
        return `${pre}${Math.round(6 + 9 * catAge)}${post} years old`;
    }
    else if (catAge == 2) {
        return `${pre}24${post} years old`;
    }
    // above 2
    else if (catAge > 2) {
        return `${pre}${Math.round(16 + 4 * catAge)}${post} years old`;
    } else {
        return "unknown";
    }
}

// run on page load
document.addEventListener("DOMContentLoaded", liveInputHandler);
document.addEventListener("DOMContentLoaded", liveInputHandlerDOB);

// run on form input change
inputElement.addEventListener("input", liveInputHandler);
inputElementDOB.addEventListener("input", liveInputHandlerDOB);
