console.log("-----Dates and times -----")

let val;
const today = new Date()// if we don't pass any value in to Date() it will set to todays date.

console.log("The date is an object as below")
val = today;
console.log("typeof today = ",typeof today)
console.log()

console.log("The date is an object as below")
val = today.toString();
console.log("today.toString() =",val)
console.log()

let birthday = new Date('1999-4-1 11:25:59');
console.log("To set the date ")
val = birthday;
console.log("birthday =",val)
console.log()

birthday = new Date('April 1 1999');
console.log("To set the date ")
val = birthday;
console.log("Other Birthday Format =",val)
console.log()

console.log("To just get the Month")
val = today.toString();
console.log("today.toString() =",val)
console.log()

console.log("To just get the Full year")
val = today.getFullYear();
console.log("today.getFullYear() =",val)
console.log()

console.log("To just get the hours")
val = today.getHours();
console.log("today.getHours() =",val)
console.log()

console.log("To just get the hours")
val = today.getHours();
console.log("today.getHours() =",val)
console.log()

console.log("Dates are objects and there attributes can be set with the dot method notation.")