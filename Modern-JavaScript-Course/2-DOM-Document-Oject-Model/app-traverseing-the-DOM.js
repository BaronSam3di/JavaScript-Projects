console.log("------------ traversing the DOM ------------")
console.log(" ITs about moiving up and down through parents and children of specific nodes")

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
val = list;

console.log("We are going to look at different properties that are attached to these items or nodes. ")
console.log("They have to do with getting the children or parents of a particular ul")
console.log(val);

// --- Get child nodes
val = list.childNodes;
console.log(val)

console.log("--- Get the childnodes single indexed element")
val = list.childNodes[0];
console.log(val)
console.log()

console.log("--- Get the childnodes to get all different types of nodes, not just the elements")
val = list.childNodes[3].nodeType;
console.log(val)
console.log()


// --- Get children element nodes ; returns an HTML collection, notice there is no text
console.log("-- In most cases you will care more about hte child elements therefore we can use the children property ----")
val = list.children;
console.log(val)

console.log("--- Get the specific elements from the HTML collection")
val = list.children[1];
console.log(val)
console.log()

console.log("--- Get the specific elements from the HTML collection")
list.children[2].textContent = "Now we have changed";
console.log(val)
console.log()

console.log("--- Get the children of children")
val = list.children[3].children;        // this should return a link
console.log(val)
console.log()

console.log("--- We could add an ID to the children of children")
list.children[3].children[0].id = "this-is-a-test-link";        // this should return a link
console.log(val)
console.log()