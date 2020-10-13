console.log("Local and Session storage -- Their is a local storage API is part of the browser where you can set and get values etc")

// -- Set local storage item: 
console.log("Local storage will stay whereas session storage will leave when the browser is closed");

// // -- Set local storage item: 
//localStorage.setItem('name', 'Alice'); // IF you inspect the storage section on the developer tools you willl see ths key:value pair

// // -- Set Session storage item: 
// sessionStorage.setItem('name', 'Bob');

// // -- Remove from local storage item: 
// localStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();
// console.log(name,age)

document.querySelector('form').addEventListener('submit',
function(event){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task); 

    localStorage.setItem('tasks',JSON.stringify(task));
    alert('Task saved');

    event.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(tasks){
    console.log(task);
    
});