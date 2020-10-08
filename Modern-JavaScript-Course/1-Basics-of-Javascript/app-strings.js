const firstName = "William"
const lastName = "Johnson"
const age = 28
sentence = "Good morning everyone in javascript."

let wholename;
wholename = firstName + lastName
console.log("wholename = ",wholename)

let cleanConcatination;
cleanConcatination = firstName + ' ' + lastName
console.log("cleanConcatination = ",cleanConcatination)

appendedName = 'Bob';
appendedName += ' Smith';
console.log("appendedName = ",appendedName)


greeting = 'Hello, my name is ' + firstName + ' amd i am ' + age;
console.log(greeting)


console.log("----------- Escapeing-------- //// ")
console.log()
console.log("When you want ot use a quotation you may need to escape it so it is no run by the computer")
console.log()

stringWithEscapedQuote = 'That\'s awsome, I can\'t wait'
console.log(stringWithEscapedQuote)
console.log()

console.log("----- Length ------")
console.log("firstName.length = ",firstName.length)
console.log()

console.log("----- Concatinate w ------")
console.log("firstName.concat(' ', lastName) = ",firstName.concat(' ', lastName))
console.log()

console.log("----- toUpperCase() ------")
console.log("firstName.toUpperCase() = ",firstName.toUpperCase())
console.log()

console.log("----- toLowerCase() ------")
console.log("firstName.toLowerCase() = ",firstName.toLowerCase())
console.log()

console.log("----- Indexing Strings ------")
console.log("firstName[0] = ",firstName[0])
console.log("firstName[1] = ",firstName[1])
console.log("firstName[2] = ",firstName[2])
console.log()

console.log("----- indexOf ------")
console.log("firstName.indexOf('l') = ",firstName.indexOf('l'))
console.log("firstName.lastIndexOf('l') = ",firstName.lastIndexOf('l'))
console.log("firstName.indexOf('x') = ",firstName.indexOf('x'))
console.log()

console.log("----- char ------")
console.log("firstName.charAt(2) = ",firstName.charAt(2))
console.log("firstName.charAt(5) = ",firstName.charAt(5))
console.log("firstName.charAt(6) = ",firstName.charAt(6))
console.log()

console.log("----- To get the last char ------")
console.log("firstName.charAt(firstName.length - 1) = ",firstName.charAt(firstName.length - 1))
console.log()

console.log("----- To get sub-strings  ------")
console.log("firstName.substring(0,4) = ",firstName.substring(0,4))
console.log()

console.log("----- Slices ------")
console.log("firstName.slice(0,4) = ",firstName.slice(0,4))
console.log("firstName.slice(-3) = ",firstName.slice(-3))
console.log()

console.log("----- Split ------")
console.log("sentence.split(' ') = ",sentence.split(' '))
console.log("sentence.split('o') = ",sentence.split('o'))
console.log()

console.log("----- replace ------")
console.log("sentence.replace('morning','EVENING') = ",sentence.replace('morning','EVENING'))
console.log()

console.log("----- replace ------")
console.log("sentence.includes('Good' = ",sentence.includes('Good'))
console.log("sentence.includes('wasp' = ",sentence.includes('wasp'))
console.log()