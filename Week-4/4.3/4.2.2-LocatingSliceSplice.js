const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstIndexA = arr.indexOf("a");
let firstIndexB = arr.indexOf("b");
let firstIndexC = arr.indexOf("c");

// find the last index of "a", "b", and "c"
let lastIndexA = arr.lastIndexOf("a");
let lastIndexB = arr.lastIndexOf("b");
let lastIndexC = arr.lastIndexOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);
  let lastIndex = array.lastIndexOf(duplicatedValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicatedValue);
  }
  return array;
}
removeDuplicates(arr, "a");
console.log(arr);
