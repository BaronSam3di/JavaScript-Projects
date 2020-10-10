console.log("Creating Elements")
const li = document.createElement('li') // An li is an element from a list in HTML

// Add Class
li.className = 'collection-item'; // this will match the class of the other items

// adding an ID
li.id = "new-item"

// Add attribute
li.setAttribute('title','new Item') // this format to create a new item is (name, attribute)

// Create a text node and append
li.appendChild(document.createTextNode('this is the contents of the text node'));

// Create new link element
const link = document.createElement('a'); // 'a' is a certain kind f element , also b,c,d... etc
// Add Classes
link.className = 'delete-item secondary-content'
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link);

// Append li as child to ul - in HTML a UL is an Unordered List
document.querySelector('ul.collection').appendChild(li)


console.log(li)