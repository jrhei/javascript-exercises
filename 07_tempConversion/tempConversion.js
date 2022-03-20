const ftoc = function(temp) {
  //formula C = (F-32)* (5/9)
  let converted = ((temp - 32) * (5/9)).toFixed(1);
  if(converted == 0.0)return 0
  return Number(converted);
  
};

const ctof = function(temp) {
  //formula F = ((9C+160)/5)
  let converted = (((9*temp)+160)/5).toFixed(1);
  if(converted == 0.0)return 0
  return Number(converted);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
