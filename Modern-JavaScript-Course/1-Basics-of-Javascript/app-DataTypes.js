// Data type declarations 
// three main ways - var , let and consts

/**
* Delay for a number of milliseconds - A naive, CPU-intensive method to block execution for a number of milliseconds:
*/


console.log("We are going to talk about two Data types")

console.log("Primitive Data Types: Stored directly pin the location the variable accesses. Stored on the stack")
console.log("------------------------------------------------------------------------------")
console.log("Reference Data Types: Accessed by reference. Objects that are sorted on the heap. A pointer to a location in memory")
console.log("------------------------------------------------------------------------------")
console.log("There are six PRIMITIVE data types")
console.log("string")
console.log("number")
console.log("boolean")
console.log("null")
console.log("undefined")
console.log("symbols - ES6")
console.log("------------------------------------------------------------------------------")
console.log("There are six REFERENCE data types")
console.log("Arrays")
console.log("Object Litereals")
console.log("Funcitons")
console.log("Dates")
console.log("Anything else")
console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")
console.log("Javascript is Dynamically Types Language")
console.log("Types are associated with values and not the variables")
console.log()
console.log("the same variable cab hold multiple types , such as STRINGSs and INTSs together")
console.log()
console.log("Many other languages are statically types ( JAVA ,C++, C#")

console.log(" ------------ PRIMITIVE TYPES----------------")
// Strings
const name = 'bob';
 console.log(typeof name);
 // number 
 const aNumber = 45 ;
 console.log(typeof aNumber );

 // Boolean
 const hasKids = true ;
 console.log(typeof hasKids);

 // null
 const car = null ;
 console.log(typeof car );
 console.log("object is a bug because when it was initially created null had the value of 0x00 , hence why its an Object")

 // unifined 
 let test ;
 console.log(typeof test );

 //Symbols
 const sym = Symbol()
 console.log(typeof sym)

 console.log(" ------------ REFERENCE TYPES----------------")
 // Array
 const hobbies = ['films', 'music']
 console.log(typeof hobbies)

 // Object Literal
 const address = {
     city: ' London',
     Country: 'UK'
 }
console.log(typeof address)

const today = new Date();
console.log(today)
console.log(typeof today)