/* 
 * Copyright (c) 2025. Zahra A. S., All rights reserved. 
 * This design is the intellectual property of Zahra A. S. 
 * Unauthorized use, reproduction, or distribution of this design is prohibited. 
 * For permissions, contact 182934048+zeashel@users.noreply.github.com
 */

const inputElement = document.getElementById("catAge"); // input
const outputElement = document.getElementById("convertedAge"); // output

function liveInputHandler() {
    const userInput = inputElement.value;
    outputElement.innerHTML = catToHumanAge(userInput);
}

function catToHumanAge(catAge) {
    pre = '<span style="color:var(--acc-fg);">'
    post = '</span>'
    if (catAge == "") {
        return "unknown";
    }
    // 0 <= x < 1
    else if (catAge >= 0 && catAge < 1) {
        return `around ${pre}${Math.round(15 * catAge)}${post}`;
    }
    else if (catAge == 1) {
        return `${pre}15${post} years old`;
    }
    // 1 < x < 2
    else if (catAge > 1 && catAge < 2) {
        return `around ${pre}${Math.round(6 + 9 * catAge)}${post}`;
    }
    else if (catAge == 2) {
        return `${pre}24${post} years old`;
    }
    // above 2
    else if (catAge > 2) {
        return `${pre}${Math.round(16 + 4 * catAge)}${post} years old`;
    }
    else {
        return "unknown";
    }
}

inputElement.addEventListener("input", liveInputHandler);