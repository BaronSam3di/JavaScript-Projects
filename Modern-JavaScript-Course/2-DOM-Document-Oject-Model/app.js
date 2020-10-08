console.log("Now we will look at DOM (Document Object Model) selectors")
console.log();
console.log("Single Elelment selectors will allow you to grab an element by its id or class or whater, but it will only grab the 1st one")
console.log();
console.log("Multiple Element sleecotrs can be used to grab groups of them")
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

// ---------- Continue from 8:22 ----------