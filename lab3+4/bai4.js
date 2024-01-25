const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'litte'}`);

//3 
const ownersReatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood);
console.log(ownersReatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
//4
//  "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
//  too little!"
console.log(`${ownersReatTooMuch.join('and')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join('and')}'s dogs eat too little!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recFood));
//6
const checkEattingOkey = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEattingOkey));

//7 
console.log(dogs.filter(checkEattingOkey));
// 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);


//
// ));
