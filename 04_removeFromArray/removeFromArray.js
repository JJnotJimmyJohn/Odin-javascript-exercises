const removeFromArray = function(...args) {
    originArr=args.shift();
    restArgs=args;
    newArr=[]
    // loop each element in newArr
    originArr.forEach(originalElement => {
        // if is among restArgs
        if (restArgs.some(elementToRm => {return elementToRm===originalElement;})) {
            console.log('Element: '+originalElement+' will not be in new arr');
        } else {
            //push to newArr
            newArr.push(originalElement);
        }
    });

    

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
