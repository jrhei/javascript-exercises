const findTheOldest = function(personName) {
    let age;
    let current = 0;
    let temp = 0;
    let older;
    let latestDeath;
    const d = new Date();
    for (const x of personName){
        if (x.yearOfDeath === undefined){
            age = d.getFullYear() - x.yearOfBirth;
        }
        else{
            age = x.yearOfDeath - x.yearOfBirth;
        }
        
        
        if (current > age){
            continue;
        }
        else if(age > current){
            current = age;
            older = x;
        }
    }
    return older;
};

// Do not edit below this line
module.exports = findTheOldest;
