/*
 * Copyright (c) 2026. Zahra A. S., All rights reserved.
 * This design is the intellectual property of Zahra A. S.
 * Unauthorized use, reproduction, or distribution of this design is prohibited.
 * For permissions, contact 182934048+zeashel@users.noreply.github.com
 */

import { catToHumanAge } from "./catagecalc.js";

const inputElementDOB = document.getElementById("catDOB"); // dob input
const catAgeOutputElement = document.getElementById("catAgeFromDOB") // in cat years output
const outputElement = document.getElementById("convertedAge"); // in human years output

function liveInputHandlerDOB() {
    const userInput = inputElementDOB.value;
    const catAge = dateCalculator(userInput);

    catAgeOutputElement.innerHTML = catAgeParse(catAge);
    outputElement.innerHTML = catToHumanAge(catAge);
}

// notes:
// Date objects can be subtracted and compared because javascript
// converts them into milliseconds since January 1, 1970

function dateCalculator(dobValue) {
    // cat's dob into a Date object
    const catDob = new Date(dobValue);
    // current date into a Date object
    const now = new Date();

    // make sure catDob is a valid date
    if (Number.isNaN(catDob.getTime())) return null;

    // make sure `now` is later than `catDob`, else return null
    if (now > catDob) {
        return ageAsDecimal(catDob, now);
    } else {
        return null;
    }
}

function ageAsDecimal(birthDate, asOfDate) {
    const msPerYear = 365.2425 * 24 * 60 * 60 * 1000;
    return (asOfDate - birthDate) / msPerYear;
}

function catAgeParse(num) {
    if (num == "" || num == null || num < 0 || num > 999) {
        return "...";
    } else {
        return Math.round(num * 100) / 100;
    }
}

// run on page load
document.addEventListener("DOMContentLoaded", liveInputHandlerDOB);

// run on form input change
inputElementDOB.addEventListener("input", liveInputHandlerDOB);
