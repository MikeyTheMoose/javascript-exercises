const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0
        || !Number.isInteger(num1) || !Number.isInteger(num2)
    ) return "ERROR"

    let sum = 0;
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }

    while (num1 <= num2) {
        sum += num1;
        num1++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
