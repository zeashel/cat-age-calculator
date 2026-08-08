/*
 * Copyright (c) 2026. Zahra A. S., All rights reserved.
 * This design is the intellectual property of Zahra A. S.
 * Unauthorized use, reproduction, or distribution of this code is prohibited.
 * For permissions, contact 182934048+zeashel@users.noreply.github.com
 */

/**
* validates a cat age.
* @param {number|null|undefined|string} catAge - cat age.
* @returns {string|null} error string if invalid, null if valid.
*/
function validateCatAge(catAge) {
    if (catAge == "" || catAge == null) {
        return "unknown";
    } else if (catAge < 0) {
        return "int too small";
    } else if (catAge > 999) {
        return "int too large";
    } else {
        return null; // valid
    }
}

/**
 * converts cat years to human years, using purina's cat-to-human years formula
 * @param {number} catAge - cat age in years.
 * @returns {number} human age in years.
 */
function calcCatToHumanAge(catAge) {
    // from 0 = 0 ... 1 = 15
    // -> 0 <= x <= 1: f(x) = 15x
    if (catAge >= 0 && catAge <= 1) {
        return Math.round(15 * catAge);
    }
    // from 1 = 15 ... 2 = 24
    // -> 1 < x < 2: f(x) = 6 + 9x
    else if (catAge > 1 && catAge <= 2) {
        return Math.round(6 + 9 * catAge);
    }
    // from 2 = 24 ... x = 24 + 4(x - 2)
    // -> x >= 2: f(x) = 16 + 4x
    else if (catAge > 2) {
        return Math.round(16 + 4 * catAge);
    }
}

/**
 * validates, converts cat to human age in years, then formats.
 * @param {number|null|undefined|string} catAge - cat age in years.
 * @returns {string} HTML string of human age in years or error string.
 */
export function catToHumanAge(catAge) {
    const error = validateCatAge(catAge) // if valid returns null
    if (error) {
        return error
    }

    const pre = '<span style="color:var(--acc-fg);">';
    const post = "</span>";
    return `${pre}${calcCatToHumanAge(catAge)}${post} years old`;
}
