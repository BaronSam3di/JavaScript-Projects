// GLOBAL SCOPE
/*
let and const have a block level scope and var has a function scope
*/

var a = 1;
let b = 2;
const c = 3;

// function runner() {
//     var a = 4; // var is a function scope declaration
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope : ', a, b, c);
// }


// runner();

// if (true){
//     // Block scope
//     var a = 4; // Using var in block scope will change the value of Global vars so you need to watch out
//     let = 5;
//     const c = 6;
//     console.log('If/Block Scope: :' , a, b, c) 

// }
// in loops - If we use var in a loop declaration we will be changeing the global value of the variable. 
for (let a = 0; a < 10; a++){
    console.log(`Loop: ${a}`)
}


console.log('Global Scope : ', a, b, c);    // look at how the value of a when we use let vs var 