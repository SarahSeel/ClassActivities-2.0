// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function
function addNumbersFrom1To100() {
  let total = 0;
  for (let i = 1; i <= 100; i++) {
    total += i;
  }
  return total;
}

// invoke the function and console.log its value
console.log(addNumbersFrom1To100());

// try to print the variable "total" outside the function
// ? what do you expect ?
//Error - undefined.

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ?
function childScope(param) {
  const childVariable = "I am in the child's scope";
  console.log("Child Scope, Parent Variable:", param);
  console.log("Child Scope, Child Variable:", childVariable);
}
console.log(childScope());

function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable); // being invoked as a "param"
  console.log("Parent Scope, Parent Variable:", parentVariable);
  console.log("Parent Scope, Child Variable:", childVariable);
  // Will not print because it's not in the current scope
}
console.log(parentAndChildScope());
