console.log("----- Keyboard and input events -----")

const form = document.querySelector('form');// big applications will need something more specific than form , uch as class or ID
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5'); 
// --- Clear input
taskInput.value = '';

//  form.addEventListener('submit', runEvent);


// // --- Key down
// taskInput.addEventListener('keydown', runEvent); // will catch the press of any key on the keyboard

// // --- Key up
// taskInput.addEventListener('keyup', runEvent); // will catch the lifting of any key on the keyboard

// // --- Key press
// taskInput.addEventListener('keypress', runEvent); // will catch the pressing of any key on the keyboard

// // --- Cut
// taskInput.addEventListener('cut', runEvent); // will catch the lifting of any key on the keyboard

// // ---- Paste
// taskInput.addEventListener('paste', runEvent); // will catch the pressing of any key on the keyboard

// // --- focus
// taskInput.addEventListener('focus', runEvent);

// // --- blur
// taskInput.addEventListener('blur', runEvent);

function runEvent(event){
    console.log(`Event Type: ${event.type}`);
    console.log(event.target.value);
    heading.innerText = event.target.value;


    // console.log(taskInput.value); // will print the new task name
    event.preventDefault(); // this will prevent he default value



}

// --- adding action="index.php" to line 22 of the index.php