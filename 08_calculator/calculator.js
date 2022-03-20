const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(sumArr) {
  let sum=0;
	for(const nums of sumArr){
    sum+=nums;
  }
  return sum;
};

const multiply = function(numbers) {
  let final=numbers[0];
  for(i = 1; i <= numbers.length -1; i++){
    final *= numbers[i];
  }
  return final;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	let final = num;
  if (num == 0)return 1
  for(i = num - 1; i >= 1; i--){
    final*= i;
  }
  return final;
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
