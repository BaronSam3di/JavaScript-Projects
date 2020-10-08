/*
The Document Object Model is a model. It describes the tree of nodes and elements created by the browser.
Javascript can be used to read/write/manipulate to the the DOM.
It gives an object orientated Representation
*/

let val;
val = document;

console.log("ther a re different structures. HTML collection formatted like an array but isn't quite the same, nut you cannot do things like use an iterative list like a forEach")
val = document.all;
val = document.all[2] // here we can idex parts of the DOM

val = document.all.length;
val = document.head;
val = document.body;
val = document.domain;
val = document.URL;

console.log(" You can select stuff without using selectors")
console.log()
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList;
val = document.images;
val = document.scripts;     // Could this could be where there is some security holes?
val = document.scripts[2].getAttribute('src');

// Listing all the scripts in the DOM
let scripts = document.scripts; // we need to define them as an object
let scriptsArray = Array.from(scripts); // we then need to put them to an Array so we can iterate over them

scriptsArray.forEach(function(script){ // Now we can run the forEach method
    console.log(script.getAttribute('src'));
});

console.log(val)
