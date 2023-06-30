// Object Activity 1
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};

// Print a string that references weather, temp and sky
console.log(
  `Today's weather is ${currentWeather.weather}, with the temperature of ${currentWeather.temp} degrees, and the sky conditions ${currentWeather.sky}.`
);

// Create a variable called weatherDetails and assign it to the string below
let weatherDetails = "These are the current weather conditions: ";

// Using a for...of loop, iterate through the array stored in "details". Each iteration of the loop should concatenate the value of the item AND a blank space to the end of the "weatherDetails" string.
// After the for...of loop, print out "weatherDetails"
for (let detail of currentWeather.details) {
  weatherDetails += `${detail}`;
}
console.log(weatherDetails);

// The exact output for this should be as shown bellow
// These are the weather details: Moderate Rain 45 Not Severe

// Accessing the details key, Print another string that references each of the properties contained within details
currentWeather.details[0] = `Moderate Rain, 45, Not Severe`;

// Object Activity 2
// Create an object called 'movie' that has 3 properties
const movie = {
  title: "Disney Pixar Wall-e",
  genre: "Family",
  yearReleased: 2009
};
// These keys will be "title", "genre", "yearReleased"
// Each key should have a relevant value

// Iterate over the movie object to print the key AND value of each property
for (let film in movie) {
  console.log(`${film} = ${movie[film]}`);
}
