const fibonacci = function(number) {
    //fibonacci formula
    //F = Fn-1 + Fn
    //1 1 2 3
    //let converted_Number = Number(number);
    let previous_F = 0;
    let present_F = 1;
    let temp;
    if (number == 0){
        return 0;
    }

    else if (number == 1){
        return 1;
    }
    else if (number >= 2){
        for (let i = 2; i <= number; i++){
            temp = present_F;
            present_F += previous_F;
            previous_F = temp;
        }
        return present_F;
    }
    else{
        return "OOPS";
    }

};

// Do not edit below this line
module.exports = fibonacci;
