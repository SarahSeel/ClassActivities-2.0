// create an Array using an Array literal
const oceanAnimals = ["fish", "crabs", "octopus", "whale"];
oceanAnimals[4] = "jellyfish";

// access the 1st item in the Array
const firstFish = oceanAnimals[0];
// access the last item in the Array
const lastIndex = oceanAnimals[oceanAnimals.length - 1];
const lastFish = oceanAnimals[lastIndex];

// print the length of the Array
console.log(oceanAnimals.length);

// use the length property to access the last item in the Array
const lastIndexAgain = oceanAnimals[oceanAnimals.length - 1];
const anotherLastFish = oceanAnimals[lastIndex];

// with for...of, loop over the Array, modify the value and add to a different Array
const goodMexicanFood = [];
for (let seafood of oceanAnimals) {
  if (seafood !== "fish") {
    goodMexicanFood.push(seafood);
  }
}
console.log(goodMexicanFood);
