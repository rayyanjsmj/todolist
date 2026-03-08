const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray)
console.table(petsArray)
petsArray.dog = 'woof';
petsArray.cat = 'meow';
petsArray.bird = 'tweet';
petsArray.monkey = 'ooh ooh aah aah';
let pet = [petsArray.dog, petsArray.cat, petsArray.bird, petsArray.monkey];
console.table(pet)
console.log(pet.indexOf('meow'))