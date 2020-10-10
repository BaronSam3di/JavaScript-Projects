console.log("Now we will look at DOM (Document Object Model) selectors")
console.log();
console.log("Single Element selectors will allow you to grab an element by its id or class or whatever, but it will only grab the 1st one")
console.log();
console.log("Multiple Element selectors can be used to grab groups of them")
console.log();
console.log(document.getElementById('task-title'))

// get things from the element , examples below
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// change styling
document.getElementById('task-title').style.background = '#333'; // notice the change in the element
document.getElementById('task-title').style.colour = '#fff';
document.getElementById('task-title').style.padding = '5px';

// change content
document.getElementById('task-title').textContent = 'Task List'; // notice the change in the element
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>' // change the colour of the text 

// To make things cleaner and leaner - same as above 
const taskTitle = document.getElementById('task-title');

// change styling
taskTitle.style.background = '#333'; // notice the change in the element
taskTitle.style.colour = '#fff';
taskTitle.style.padding = '5px';

// change content
taskTitle.textContent = 'Task List'; // notice the change in the element
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:blue">Task List</span>' // change the colour of the text 

// document.querySelector()

console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f3f6';