// create a new unordered list (ul) element
const newList = document.createElement("ul");
console.log(newList);

// remove the paragraph element in the nav-bar
const child = document.querySelector(".nav-bar > p");
const paragraph = document.querySelector(".nav-bar").removeChild(child);
console.log(child, paragraph);

// add your new ul element to the nav-bar
const newNav = document.querySelector(".nav-bar").appendChild(newList);
console.log(newNav);

// create two new list item (li) elements, and add some text to them
const list1 = document.createElement("li");
list1.textContent = "Unicorns";
const list2 = document.createElement("li");
list2.textContent = "Horses";
console.log(list1, list2);

// add the li elements to the ul in the nav-bar
newNav.appendChild(list1);
newNav.appendChild(list2);
console.log(newNav);
