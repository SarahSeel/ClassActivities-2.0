// ? what does the function below return?
// Returns Undefined if there is not return statement.

function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
  return num;
}

// change the function above to return a value

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  // eslint-disable-next-line no-unreachable
  console.log(
    "This will never print because it is after the return statement."
  );
}
//Console.log is out of scope from the return statement.

// ? will the following function short circuit?
//Lack of return statement, no.

let height = 50;
function checkCircusRides() {
  if (height < 48) {
    return "Take a ride on the carousel!";
  }
  if (height < 60) {
    return "Try the bumper cars!";
  }
  return "Enjoy the roller coaster!";
}

// change the function above to use short circuiting
