
const id = 100;

// // Equal to
// if(id == 100) {
//     console.log("CORRECT")
// } else {
//     console.log("INCORRECT")
// }

// // NOT Equal to
// if(id != 100) { // not equal too
//     console.log("CORRECT")
// } else {
//     console.log("INCORRECT")
// }

// //Equal to value and Type
// if(id === 100) { // 
//     console.log("CORRECT")
// } else {
//     console.log("INCORRECT")
// }

// // Equal to
// if(id !== 100) { // not equal too value and type
//     console.log("CORRECT")
// } else {
//     console.log("INCORRECT")
// }


// if(typeof id !== 'undefined'){ // good wa yto test if something doesn't exist
//     console.log(`The ID is ${id}`)
// } else {
//     console.log('NO ID')
// }

// // Greater than or Less than
// if(id > 200) { // not equal too
//     console.log("CORRECT")
// } else {
//     console.log("INCORRECT")
// }

const colour = 'red'

// if(colour === 'red') { // not equal too
//     console.log("Colour is red")
// } else if(colour === 'blue') {
//     console.log("Colour is blue")
// } else { 
//     console.log("colour is not red or blue")
// }


//LOGICAL OPERATORS

const name = 'Steve';
const age = 20;

// AND &&
if (age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if (age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}

// OR || 
if (age < 16 || age > 65){
    console.log(`${name} can not run in the race`)
} else {
    console.log(`${name} is registered for the race`)
}


// Ternary operator - short hand conditionals
console.log(id === 100 ? 'this is correct' : 'InCORRECT')

// TErnary without braces
if (id === 100)
    console.log("Correct without braces")
else
    console.log("Correct without braces")