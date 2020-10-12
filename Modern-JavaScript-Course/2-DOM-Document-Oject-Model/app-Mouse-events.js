console.log("----- Mouse Events -----");


const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click 
// clearBtn.addEventListener('click', runEvent); // When a button is clicked it will run the RunEventFunction
// clearBtn.addEventListener('dblclick', runEvent); // When a button is Double clicked it will also run the RunEventFunction

// // -----------------------------------------------
// // mouse Down
// clearBtn.addEventListener('mousedown', runEvent); // When the mouse is pressed it will run the RunEventFunction

// // mouse up
// clearBtn.addEventListener('mouseup', runEvent); // When the mouse is released it will also run the RunEventFunction

// // mouse Enter
// card.addEventListener('mouseenter', runEvent); // When the mouse hovers into the card it will run the RunEventFunction

// // mouse Enter
// card.addEventListener('mouseleave', runEvent); // When the mouse hovers out of the card it will run the RunEventFunction

// // mouse over - different in that when you go in/over sub elements of the card they will fire off
// card.addEventListener('mouseover', runEvent); // When the mouse hovers out of the card it will run the RunEventFunction

// // mouse out - different in that when you go out/leave sub elements of the card they will fire off// mouse out 
// card.addEventListener('mouseout', runEvent); // When the mouse hovers out of the card it will run the RunEventFunction

// // -----------------------------------------------
card.addEventListener('mousemove', mousemoveFunc); // When the mouse moves around the card it will run the RunEventFunction


// Event handler
function runEvent(event){
    console.log(`EVENT TypeError: ${event.type}`)
}

// Event handler
function mousemoveFunc(event){
    console.log(`EVENT TypeError: ${event.type}`)
    heading.textContent = `MouseX: ${event.offsetX} MouseY: ${event.offsetY}`
    document.body.style.backgroundColor = `rgb(${event.offsetX},${event.offsetY},10)`
}