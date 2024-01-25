const checkDogs = function (dogsJulia,dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);

    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function (dog,i) {
        if (dog>=3){
            console.log(`Dog number ${i+1} is an an adlt,and is ${dog} years old`);
        }else{
            console.log(`Dog number ${i+1} is an an adlt,and is still a pugpy 🐶`);
      
        }
    })
};


//checkDogs([3,5,2,12,7],[4,1,15,8,3]);
checkDogs([9,16,6,8,3],[10,,6,1,4]);