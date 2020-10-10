console.log("--- Event with the UI ----- ");
//  // ----- Unnamed FUNCTION in a button
// document.querySelector('.clear-tasks').addEventListener('click', 
// function(someVariable){
//     // Here eis where we put the functionality when we click
//     // -- Note to get this to persist on the console we need to add a # to the href on link 65 of the index.html
//     console.log("----- -You pressed the button ------")
//     // Instead of a hash symbol on the index.html, if we placed a link to a website it would redirect. we can stop this default behaviour with the line below 
//     someVariable.preventDefault();
    
// });

// Clear task button
document.querySelector('.clear-tasks').addEventListener('click', myClickFunction);

function myClickFunction(event){
    console.log("You clicked")
}

// Add Task
document.querySelector('.clear-tasks').addEventListener('click', myClickFunction);

function myClickFunction(event){
    let val;
    val = event;
    val = event.target.id;
    val = event.target.className; 
    val = event.target.classList;  
    event.target.innerText = "Boom"

    // Event type
    val = event.type;// try changieng click on line 14 to mouseover

    // Get the timestamp
    val = event.timeStamp

    // Get hte coords evebt relative to the window
    val = event.clientY;
    val = event.clientX;

    // Get the coords evebt relative to the window
    val = event.offsetY;
    val = event.offsetX;


    console.log("You clicked and got val =",val)
}
