console.log("----- Arrays and Array methods------")
console.log()
const numbers = [15,45,75,493,65,78,51,65,43];
const numbers2 = new Array(1,2,3,4,5,6)
const fruit = ['banana','kiwi','orange','pear','apple']
const mixed = [22,'hello', true, undefined, null, {a:1,b:2}, new Date];

let val;
console.log(numbers)
console.log(val)

console.log("----- Check the length of an array ------")
val = numbers.length;
console.log("numbers.length = ",val)
console.log()

console.log("----- Check if it is an array with Array.isArray(numbers)------")
val = Array.isArray(numbers);
console.log("Array.isArray(numbers) =",val)
console.log()

console.log("----- Get a single value from an array with numbers[n]------")
val = numbers[3];
console.log("numbers[3] =",val)
val = numbers[0];
console.log("numbers[0] =",val)
console.log()

console.log("----- Insert a number into an array ------")
numbers[3] = 77;
val = numbers[3]
console.log("numbers[3] = 77 >> ",val)
console.log()

console.log("----- Check the indx of a number in an array ------")
val = numbers.indexOf(77);
console.log("numbers.indexOf(77) =",val)
console.log()

console.log("----- Mutating an array ------")
console.log("----- Add to the end of array with PUSH ------")
console.log("numbers            =",numbers)
numbers.push(250);
console.log("numbers.push(250) =",numbers)
console.log()

console.log("----- Add to the front of an array with UNSHIFT ------")
console.log("numbers            =",numbers)
numbers.unshift(111);
console.log("numbers.unshift(111) =",numbers)
console.log()


console.log("----- Take off from the end of an array with POP ------")
console.log("numbers            =",numbers)
numbers.pop();
console.log("numbers.pop() =",numbers)
console.log()

console.log("----- Take off the front of an array with SHIFT ------")
console.log("numbers            =",numbers)
numbers.shift(111);
console.log("numbers.shift(111) =",numbers)
console.log()

console.log("----- Splice out value from an array with SHIFT specifiying the index and amount to be taken ------")
console.log("numbers            =",numbers)
numbers.splice(1,2);
console.log("numbers.splice(1,2) =",numbers)
console.log()

console.log("----- Reverse the values in an array with .reverse() ------")
console.log("numbers            =",numbers)
numbers.reverse();
console.log("numbers.reverse() =",numbers)
console.log()

console.log("----- Concatenate two arrays ------")
console.log("numbers            =",numbers)
console.log("numbers2            =",numbers2)
val = numbers.concat(numbers2);
console.log("numbers.concat(numbers2) =",val)
console.log()

console.log("----- Sort the values in an array with .sort() ------")
console.log("fruit            =",fruit)
val = fruit.sort();
console.log("fruit.sort(); =",val)
console.log()

console.log("----- Sort the values of Array of numbers - Note ------")
console.log("----- If you use the sort on numbers it will just sort by the first digit ------")

console.log("numbers  =",numbers)
val = numbers.sort(function(x,y){
    return x - y
});
console.log("numbers sorted from low to high =",val)
val = numbers.sort(function(x,y){
    return y - x
});
console.log("numbers sorted from high to low =",val)

console.log("Find the numbers that are of a certain type ")
console.log("We create function and then passes that function to the find method of an array ")
console.log("The find will then return the number of that category.")

function under50(num){
    return num < 50
}

val = numbers.find(under50);
console.log("the number that meets the category of hte function is ",val)