const leapYears = function(year) {
    // must be integer and positive
    if ((year<0)||(!Number.isInteger(year))) {
        return 'ERROR';
    }
    // remainder 4 is 0
    // can't be divisible by 100 unless divisible by 400
    if ((year%4==0)&&((year % 100 != 0)||(year%400==0))) return true;

    return false;


};

// Do not edit below this line
module.exports = leapYears;
