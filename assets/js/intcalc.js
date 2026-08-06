/*
 * Copyright (c) 2026. Zahra A. S., All rights reserved.
 * This design is the intellectual property of Zahra A. S.
 * Unauthorized use, reproduction, or distribution of this design is prohibited.
 * For permissions, contact 182934048+zeashel@users.noreply.github.com
 */

import { catToHumanAge } from "./catagecalc.js";

const inputElement = document.getElementById("catAge"); // age int input
const outputElement = document.getElementById("convertedAge"); // output

function liveInputHandler() {
    const userInput = inputElement.value;
    outputElement.innerHTML = catToHumanAge(userInput);
}

// run on page load
document.addEventListener("DOMContentLoaded", liveInputHandler);

// run on form input change
inputElement.addEventListener("input", liveInputHandler);
