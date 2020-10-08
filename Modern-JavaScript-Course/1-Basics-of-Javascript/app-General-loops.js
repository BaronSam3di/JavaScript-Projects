console.log("--- Loops and iterations -----")


// FOR LOOP 
// they need 3 things: initialization, condition and increment

// for(let index = 0; index < 10; index++){
//     console.log("Number "+ index)
// }


// FOR LOOP WITH BREAK - for when you know how many iterations
/*
for(let index = 0; index < 10; index++){
    if (index === 2){
        console.log('2 is the best number')
        continue        // continue will make the loop skip to the next the iteration, otherwise we would have 2 2's
    }

    if ( index === 7){
        console.log("I'm out !!!")
        break           // break will end the loop , see it doesn't get above 6
    }
    console.log("Number "+ index)
}
*/

// WHILE LOOPS - for when you don't know how many iterations

/* 
let index = 0; // set var outside the loop
while(index < 10 ){ // Just takes one thing, the condition
    console.log('MEanwhile...'+ index)
    index ++;       // update the iterator here
}
*/

// DO WHILE LOOP - its different because it will always run at least once
/*
let index = 0;
do {
    console.log('Doing .....' + index)
    index++;
}
while(index < 10);
*/

/*
// LOOPING THROUGH ARRAYS
const cars = ['Ford','Vauxhall', 'Honda', 'Masseratti', 'Toyota', 'Mitsubishi']
for (let index = 0; index < cars.length; index++){
    console.log(cars[index])
}

// FOREACH
cars.forEach(function(car){ // this is an anonymous function - It can take an iterator, an index 
    console.log("Clean " + car)
});
*/

/*
//MAP - used to return something different
const users = [
    {id : 1, name:'Alice'},
    {id : 2, name:'Bob'},
    {id : 3, name:'Charlie'}
]
const ids = users.map(function(user){ // map will create an array based on each eliment of the array being passed in
    return user.name;
});
console.log(ids);
*/

//FOR IN
const user = {
    firstname : 'John',
    lastName : 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}