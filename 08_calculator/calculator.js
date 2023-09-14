const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(anArray) {
	final_sum=anArray.reduce((previousValue,currentValue) => {
    previousValue = previousValue+currentValue
    return previousValue
  },0)
  return final_sum
};

const multiply = function(anArray) {
  final_sum=anArray.reduce((previousValue,currentValue) => {
    previousValue = previousValue*currentValue
    return previousValue
  },1)
  return final_sum
};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(a) {
  product=1;
	for (let num = 1; num <= a; num++) {
    product *=num;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
