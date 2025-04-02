const removeFromArray = function(arr, ...other) {
    let newArray = [];
    for (el of arr) {
        if (!other.includes(el)) {newArray.push(el) }
    }
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;