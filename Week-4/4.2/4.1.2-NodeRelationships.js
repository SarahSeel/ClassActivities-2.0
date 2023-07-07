// select the root node
let root = document.querySelector("html");
console.log(root);

// select the last child of the root node
// document.querySelector("html").lastElementChild;
console.log(root.lastElementChild);

// select all the children of the body element
let bodyChildren = document.querySelector("body");
console.log(bodyChildren.children);

// select the next sibling of the h2 node
console.log(document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node
console.log(document.querySelector("h1").parentElement);
