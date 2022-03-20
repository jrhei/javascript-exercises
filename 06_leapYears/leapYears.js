const leapYears = function(year) {
    //leap years divisible by 4 or 400
    //not leap years if divisible by 100
    remainderOne = (year % 4);
    remainderTwo = (year % 400);
    remainderThree = (year % 100);

    if(!(remainderThree == 0) && (remainderOne == 0) || (remainderTwo == 0)  )return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
