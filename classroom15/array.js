let arrayNumbers = [35, 1, 10, 20]
let arrayNames = ["Matheus", "Maria", "Julia", "Fabio"]
let arrayAge = [50, 13, 17, 5]
console.log(`This is the array: ${arrayNumbers}.`);
arrayNumbers.push(15);
console.log(`Now this is the array: ${arrayNumbers}.`);
console.log(`This is array has ${arrayNumbers.length} positions.`);
arrayNumbers.sort();
console.log(`Now this is the array: ${arrayNumbers}.`);
let positionIndex = arrayNumbers.indexOf(10);
console.log(`This is: ${positionIndex}.`);

for (let pos = 0; pos < arrayNames.length; pos++) {
    console.log(`This is the name: ${arrayNames[pos]}`);
}

for (let age in arrayAge) {
    console.log(`This is the age: ${arrayAge[age]}`);
}