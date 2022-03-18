const repeatString = function(word, count) {
    let completeWord='';
    if (count < 0){
        return 'ERROR'
    }
    else{
        for (i = 1; i <= count; i++){
            completeWord+=word;
        }
        return completeWord;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
