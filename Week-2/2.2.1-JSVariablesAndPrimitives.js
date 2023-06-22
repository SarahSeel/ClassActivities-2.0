// create a constant variable (const)
const myName = "Sarah";

// create a variable that can be reassigned (let)
let number = 8;

// create three variables and assign them values of different data types (=)
let string = "string";
let num = 6;
let boolean = true;

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof boolean); // boolean
console.log(typeof string); // string

// change the value referenced by a variable (dynamic typing)
num = "six";

// print the type of the variable you just changed (typeof)
console.log(typeof num);

// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?

let language = "JavaScript";
let week = 2;
let f = false;

console.log(
  "Hello, my name is " +
    `${myName}` +
    ", and I am learning " +
    `${language}` +
    ". I have been practicing for only " +
    `${week}` +
    " weeks, so my status as a master is: " +
    `${f}` +
    "."
);
