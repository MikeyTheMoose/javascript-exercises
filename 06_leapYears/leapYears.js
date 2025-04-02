const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR";

    let isLeapYear = null;

    // Leap years are divisible by 4, 
    // but not by 100, except if also divisible by 400.
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {isLeapYear = true;}
            else {isLeapYear = false;}
        }
        else {isLeapYear = true}
    }
    else isLeapYear = false;
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
