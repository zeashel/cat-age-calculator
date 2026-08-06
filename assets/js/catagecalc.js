/*
 * Copyright (c) 2026. Zahra A. S., All rights reserved.
 * This design is the intellectual property of Zahra A. S.
 * Unauthorized use, reproduction, or distribution of this design is prohibited.
 * For permissions, contact 182934048+zeashel@users.noreply.github.com
 */

// the main function that uses the cat-to-human years formula
// - arg: int (or any other value which will return "unknown")
// - returns: HTML string
export function catToHumanAge(catAge) {
    const pre = '<span style="color:var(--acc-fg);">';
    const post = "</span>";

    // sanitize
    if (catAge == "" || catAge == null) {
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
