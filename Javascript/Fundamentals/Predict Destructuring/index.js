const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // prints first car because it is the index 0 as a random new name variable
console.log(otherRandomCar) // prints the index 1 because of the comma

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //doesnt print because its used here as a key in a key value pair. It's incorrectly called in console.log
console.log(otherName); // doesn't print othername because its an object key value pair

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //prints the password because it's defined clearly as a variable
console.log(hashedPassword); //totall irrelevant in every way. there is no password or hashedpassword in this object

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //boolean is not true
console.log(first == third); // boolean is true 

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // reaches into object and prints value
console.log(secondKey); // reaches into object and prints all 6 in the array
console.log(secondKey[0]); // prints index 0
console.log(willThisWork); // prints index 1 because of the comma




