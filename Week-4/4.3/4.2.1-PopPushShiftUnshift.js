const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let num1 = nums.pop();
// console.log(nums);

let num2 = nums.pop();
// console.log(nums);

// remove each of the first two items with shift(), saving each item to a variable
let shift = nums.shift();
// console.log(nums);

let shift2 = nums.shift();
// console.log(nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
let unshift = nums.unshift(num1, num2);
// console.log(nums);

let push = nums.push(shift2, shift);
console.log(nums);
