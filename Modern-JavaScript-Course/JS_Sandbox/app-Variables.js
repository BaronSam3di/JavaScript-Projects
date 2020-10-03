// Data type declarations 
// three main ways - var , let and consts


// // ----------------------------------------------------------------
// // VAR
// var mansName = 'Bob'
// console.log(mansName)

// mansName = "Barry";
// console.log("mansName now changed to: ",mansName)

// // ----------------------------------------------------------------
// // Initialize a var
// var greeting;
// console.log("greeting is set to ",greeting)
// greeting = "hello"
// console.log("greeting is set to ",greeting)


// console.log('RULE of vars letters can only contain letters, numbers , _, $ and they cannot start with a number') 
// console.log(" Multi-word vars should be camelCase")
// console.log("this-is-called-Spinal-tap")
// console.log("this_is_called_Underscore")
// console.log("ThisIsCalledPascalCase")
// console.log("constants should have names all in CAPITALS")


// // ----------------------------------------------------------------

// LET

// let mansName = 'Bob'
// console.log(mansName)

// mansName = "Barry";
// console.log("mansName now changed to: ",mansName)

// CONSTANTS

// Cant be changed or reassigned

const mansName = 'Bob'
console.log("Constant name",mansName)
console.log("Cannot change a constant once it is set , AKA immutable")
console.log("Have to assign a value . cannot be unassigned")


const numbers = [1,2,3,4,5,6]
numbers.push(8) // push method to add onto an array
console.log(numbers)
console.log("We can still add things to a consts in Javascript, we just cannot reassign the name we have choosen")