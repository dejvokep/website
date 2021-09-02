const DAY_MILLIS = 1000 * 60 * 60 * 24
const MONTH_MILLIS = DAY_MILLIS * 30.5
const YEAR_MILLIS = DAY_MILLIS * 365

    // Max time
    let maxTime = 0;
    // Foreach
    Array.prototype.forEach.call(document.getElementsByClassName("time"), (element) => {
        // Passed time
        const passed = getPassedTime(element)
        // Set
        maxTime = Math.max(passed, maxTime)
        // Calculate
        element.innerText = getTime(passed);
    });

    // Foreach
    Array.prototype.forEach.call(document.getElementsByClassName("time"), (element) => {
        // Set attribute
        element.setAttribute("data-fill-to", getPassedTime(element) / maxTime * 100 + "%")
    });

// Calculate time
function getTime(passed) {
    // Temp passed time unit (years now)
    let temp = (passed - (passed % YEAR_MILLIS)) / YEAR_MILLIS
    // If more than 0
    if (temp > 0) {
        return getUnit(temp, "year");
    }

    // Months
    temp = (passed - (passed % MONTH_MILLIS)) / MONTH_MILLIS
    // If more than 0
    if (temp > 0) {
        return getUnit(temp, "month");
    }

    // Months
    temp = (passed - (passed % DAY_MILLIS)) / DAY_MILLIS
    // If more than 0
    if (temp > 0) {
        return getUnit(temp, "day");
    }
}

function getPassedTime(element) {
    return element.getAttribute("data-current-time") - element.getAttribute("data-from-time");
}

function getUnit(value, baseName) {
    return value + " " + baseName + (value > 1 ? "s" : "")
}