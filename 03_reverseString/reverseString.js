const reverseString = function(strings) {
    stringsToArr = strings.split('');
    finalIndex = stringsToArr.length - 1
    let reversedArr=[];
    let y = 0;
    for(i=finalIndex; i >= 0; i--){
        reversedArr[y] = stringsToArr[i];
        y++;
    }
    let reversedWord = reversedArr.join('');
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
