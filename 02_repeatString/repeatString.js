const repeatString = function(string, num) {
    if (num<0) {
        return 'ERROR';
    } else if (num==0) {
        return '';
    } else {
        tempArray=[];
        for (i=0;i<num;i++) {
            tempArray.push(string);
        }
        return tempArray.join('');
    }
};

// Do not edit below this line
module.exports = repeatString;
