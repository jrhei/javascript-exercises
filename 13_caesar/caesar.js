const caesar = function(letters, shiftVal) {
    let lettersArr = letters.split('');
    let isCapital=true;
    let tempoShiftVal;
    let newLetter;
    let letterCode;
    let letter;
    for (let i = 0; i <= lettersArr.length - 1; i++){
        let isLetter = true;
        letterCode = lettersArr[i].charCodeAt(0)
        if (letterCode >= 65 && letterCode <= 90){
            isCapital = true;
        }
        else if (letterCode >= 97 && letterCode <= 122 ) {
            isCapital = false;
        }
        else {
            isLetter = false;
        }
        let shiftCode = letterCode + shiftVal;
        if (isCapital && isLetter){
            if (shiftCode > 90){
                while(shiftCode > 90){
                    tempoShiftVal = shiftCode % 91
                    shiftCode = 65 + tempoShiftVal;
                }

                lettersArr[i] = String.fromCharCode(shiftCode);
            }
            else if(shiftCode < 65){
                while (shiftCode < 65){
                    tempoShiftVal = 64 % shiftCode ;
                    shiftCode = 90 - tempoShiftVal;
                }
                lettersArr[i] = String.fromCharCode(shiftCode);
            }
            else{
                lettersArr[i] = String.fromCharCode(shiftCode);
            }
            
        } 
        else if (!isCapital && isLetter){
            if (shiftCode > 122){
                while (shiftCode > 122){
                    tempoShiftVal = shiftCode % 123;
                    shiftCode = 97 + tempoShiftVal;
                }

                lettersArr[i] = String.fromCharCode(shiftCode);
            }
            else if (shiftCode < 97){
                while (shiftCode < 97){
                    tempoShiftVal = 96 % shiftCode ;
                    shiftCode = 122 - tempoShiftVal;
                }
                lettersArr[i] = String.fromCharCode(shiftCode);
            }
            else{
                lettersArr[i] = String.fromCharCode(shiftCode);
            }
            
        }
        else if(!isLetter){
            continue;
        }
    }
    letter = lettersArr.join("");
    return letter;

};

// Do not edit below this line
module.exports = caesar;
