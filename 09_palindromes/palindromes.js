const palindromes = function (word) {
    word = word.toLowerCase();
    let arrWord = word.split("");
    let newArrWord=[];
    let newWord;
    let origWord = arrWord.filter(isNotAlphabet); 
    
    for (i = arrWord.length - 1; i >= 0; i--){
        
        if ((arrWord[i] >= 'a' && arrWord[i] <= 'z')){
            newArrWord.push(arrWord[i]);
            
        }
        else{
            continue;
        }
        
    }
    actualOrigWord = origWord.join('');
    newWord= newArrWord.join('');
    if (actualOrigWord === newWord)return true
    return false;
};
function isNotAlphabet(word){
    if (word >= 'a' && word <= 'z')return word;
    
}
// Do not edit below this line
module.exports = palindromes;
