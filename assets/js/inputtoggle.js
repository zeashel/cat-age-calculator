/*
 * Copyright (c) 2026. Zahra A. S., All rights reserved.
 * This design is the intellectual property of Zahra A. S.
 * Unauthorized use, reproduction, or distribution of this design is prohibited.
 * For permissions, contact 182934048+zeashel@users.noreply.github.com
 */

const checkbox = document.getElementById("inputToggleCheckbox"); // when checked, shows DoB mode and hides int mode
const intInput = document.getElementById("intInput");
const dobInput = document.getElementById("dobInput");

// function to update display based on checkbox state
function updateInputDisplay() {
    if (checkbox.checked) {
        intInput.style.display = "none";
        dobInput.style.display = "flex";
    } else {
        intInput.style.display = "flex";
        dobInput.style.display = "none";
    }
}

// run on page load
document.addEventListener("DOMContentLoaded", updateInputDisplay);

// run on checkbox change
checkbox.addEventListener("change", updateInputDisplay);
