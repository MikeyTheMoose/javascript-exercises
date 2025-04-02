const reverseString = function(input) {
    let string = "";
    for (let i=input.length-1;i>=0;i--) {
        string += input[i]
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
