const palindromes = function (aString) {
    // lower case whole thing
    aString = aString.toLowerCase(aString);
    // remove space, comma, etc.
    aString = aString.replace(/ /g,'')
    aString = aString.replace(/,/g,'')
    aString = aString.replace(/\./g,'')
    aString = aString.replace(/!/g,'')
    // console.log(aString);
    for (let index = 0; index < aString.length; index++) {
        rightIndex = aString.length-index-1
        if (aString[index]!=aString[rightIndex]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
