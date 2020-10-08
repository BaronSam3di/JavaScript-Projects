console.log(" -------- Object literals Reference types")

const person = {    // this defines an object literal
    firstName : 'Steve',
    lastName : ' Smith',
    age : 30,
    email : 'steve@aol.com',
    hobbies: ['music','sports'],
    address: {
        city: 'London',
        postcode:'EC1Y 9JM'
    },

    getBirthYear: function(){
        return 2020 - this.age; // the keyword "this" pertains to the object that you are in atm
    }

}



let val;
val = person;
console.log("------ The whole object –------")
console.log("console.log(person) = ", person)

console.log("------ Just one attribute of the Object  –------")
console.log("console.log(person['firstName']) = ", person['firstName'])
console.log("console.log(person.firstName) = ", person.firstName)

console.log(person.address)
console.log(person.getBirthYear()) 

const people = [
    {name: 'Alice', age : 30},
    {name: 'Bob', age : 97},
    {name: 'Charlie', age : 12}
];

for(let index = 0; index < people.length; index++){
    console.log(people[index].name)
}