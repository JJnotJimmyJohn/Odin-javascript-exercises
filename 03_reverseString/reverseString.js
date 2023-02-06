const reverseString = function(someString) {
    stringLength=someString.length;
    newString='';
    for (i=stringLength;i>0;i--) {
        newString+=someString[i-1];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
