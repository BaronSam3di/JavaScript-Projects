console.log("---- Functions: Declerations, Expressions and iffy's imidiate involkable ")


// FUNCTION DECLARATIONS

function greetToTheConsole(){
    console.log('Hello from the function');
}
greetToTheConsole(); // this is how we call it.

function greetByReturn(){
    return 'Hello by return'
}
console.log(greetByReturn())

function greetingWithVariable(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName +' with Vars'
}
console.log(greetingWithVariable('JOHN', 'doe'));

function greetingWithDefaults(firstName = 'Stevie', lastName = 'Boy'){
    return 'Hello ' + firstName + ' ' + lastName +' with a default'
}
console.log(greetingWithDefaults()) // deliberately not passing in vars


// FUNCTION EXPRESSION


const square = function(x = 3){    //we are setting a default of 3, and have made the function anonymous, but you could give it a name.
    return x * x 

}; // needs a semi colon because it is a variable
// console.log(square(2))

// Immediately INVOCABLE FUNCTION EXPRESSIONS - IIFEs
// A function that you declare and Run at the same time
// To do this we need it in an expression and to do this we need to put it into parenthesis


// (function(){
//     console.log('We ran our first IIFE');
// })(); // INVOCABLE functions like others need to have parenthesis like the pair on this line  

// (function(name){
//     console.log('Hello ' + name);
// })("BOSS");



// PROPERTY METHODS - When a function is put inside a object it is called a method. 
const todo = {
    add: function(){
        console.log('Add todo...')
    },
    edit : function(id){
        console.log(`Edit todo ${id}`);
    }
}

// we can also declare function outside of our function
todo.delete = function(){
    console.log('Deleting stuff......')
}

todo.add();
todo.edit(22);
todo.delete();
