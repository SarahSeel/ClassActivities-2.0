// add an event listener to the dog picture that listens for a "click" and gives an alert
document
  .querySelector("#dog-picture")
  .addEventListener("click" (event) => alert);

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document
  .querySelector(".class-week")
  .addEventListener("mouseover", mouse => mouse.target.style.background-color);

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
addEventListener("keydown", (event) => {});

