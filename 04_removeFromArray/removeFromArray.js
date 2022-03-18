const removeFromArray = function(arr, ...theArgs) {
    //let arrArgs = [args];
    let newArr=[];
    let state = false;
    loop1:
        for (const character of arr){
    loop2:
            for (let i = 0; i <= theArgs.length - 1; i++)
            {
                if(character === theArgs[i]){
                    state = false;
                    break;
                }
                else{
                    state = true;
                }
            }
           if (state == true){
               newArr.push(character);
           } 
        }
        return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
