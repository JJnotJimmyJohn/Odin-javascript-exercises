const sumAll = function(num_a, num_b) {
    // must be positive
    if ((num_a<0)||(num_b)<0) {
        return 'ERROR';
    }

    // must be integer
    if ((!Number.isInteger(num_a))||(!Number.isInteger(num_b))) {
        return 'ERROR'
    }

    // put smaller number first
    start_num=num_a;
    end_num=num_b;
    if (num_a>num_b) {
        start_num=num_b;
        end_num=num_a;
    }
    
    num_sum=0;
    for (i=start_num;i<=end_num;i++) {
        num_sum=num_sum+i;
    }

    return num_sum;
};

// Do not edit below this line
module.exports = sumAll;
