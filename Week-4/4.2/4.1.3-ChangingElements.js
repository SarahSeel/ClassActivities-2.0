// print the outer HTML of the navigation bar
let outNav = document.querySelector("nav").outerHTML;
console.log(outNav);

// print the inner HTML of the navigation bar
let innerNav = document.querySelector("nav").innerHTML;
console.log(innerNav);

// print the text content of the #class-schedule-list element
let classSchedule = document.querySelector("#class-schedule-list").textContent;

console.log(classSchedule);

// select the classList for the first class-week, then add the class "week-1"
let childWeek = document.querySelector(".class-week:first-child");
console.log(childWeek);

// select the img element and add a src attribute
let image = (document.querySelector("img").src =
  "https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg?w=2000");

// change the font color of the h1 element
let color = (document.querySelector("h1").style.color = "yellow");
