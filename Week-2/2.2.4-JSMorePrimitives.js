// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let animal = "Horse";
let age = 4;
let like = true;
let unknown;
let feeling = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(animal);
console.log(age);
console.log(like);
console.log(unknown);
console.log(feeling);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let today = `If I could have a ${animal} I would want one that is ${age} years old.`;
console.log(today);

// reassign the value of the variable that references "null"
feeling = "Happy";

// print the value and its type
console.log(feeling);
console.log(typeof feeling);

// print a variable that causes a ReferenceError
console.log(unicorn);

// alter the previous line to no longer cause a ReferenceError
let unicorn;
console.log(unicorn);
