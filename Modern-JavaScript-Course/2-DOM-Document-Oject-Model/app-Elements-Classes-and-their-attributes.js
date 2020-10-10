console.log("Removing-and-replacing-elements, working with classes and their attributes")

// Replace elements


//Create element
const newHeading = document.createElement('h2') // this is the h2 size

// Add id
newHeading.id = 'task-title';

// New text node 
newHeading.appendChild(document.createTextNode('New Task List'));

// Get the old heading 
const oldHeading = document.getElementById('task-title');

// Parent 
const cardAction = document.querySelector('.card-action')

// Replacement
cardAction.replaceChild(newHeading,oldHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[0].remove();

// Remove child eleelmt 
list.removeChild(lis[3])

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);

const link = firstLi.children[0];
let val;

val = link.className;
val = link.classList
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com');
val = link.hasAttribute('href')     // return a boolean if it has the attribute
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;


console.log(val)

// console.log(newHeading)
