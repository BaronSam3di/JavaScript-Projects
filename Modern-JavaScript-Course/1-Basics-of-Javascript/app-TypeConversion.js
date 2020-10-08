// TYPE CONVERSION
console.log("-----------Type conversion------------")

let val;
val = 5
console.log(val);
console.log(typeof val);
val = String(val) 

console.log("-----------number to string------------")
//number to string
console.log(val);
console.log(typeof val);
console.log(val.length)



val = String(4+4)
//
console.log(val);
console.log(typeof val);
console.log(val.length)

console.log("-----------Bool to string------------")
val = String(true)
//
console.log(val);
console.log(typeof val);
console.log(val.length)

console.log("-----------Date to string------------")
val = String(new Date())
//
console.log(val);
console.log(typeof val);
console.log(val.length)

console.log("-----------Array to string------------")
val = String([1,2,3,4,5,6,7])
//Array to string
console.log(val);
console.log(typeof val);
console.log(val.length)


console.log("-----------toString method - An alternative ------------")
console.log("For example: val = (5).toString();")
val = (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length)


console.log("For example: val = (true).toString();")
val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length)

console.log("-----------String to Numbers ------------")
val = '5'
val = Number(val)

console.log(val)
console.log(typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2)); // the 2 will five give us the same value but to 2 decimal places

console.log("-----------Boolean to Numbers ------------")
val = Number(true)

console.log(val)
console.log(typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2)); // the 2 will five give us the same value but to 2 decimal places

console.log("-----------Null to Numbers ------------")
val = Number(null)

console.log(val)
console.log(typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2)); // the 2 will five give us the same value but to 2 decimal places


console.log("-----------String to Numbers ------------")
val = Number("hello")

console.log(val)
console.log(typeof val);
console.log(val.toFixed(),"= Not a Number");
console.log(val.toFixed(2),"= Not a Number"); // the 2 will five give us the same value but to 2 decimal places

console.log("-----------string numbers into Numbers with parseInt ------------")
val = parseInt('100.30')

console.log(val)
console.log(typeof val);
console.log(val.toFixed(2)); // the 2 will five give us the same value but to 2 decimal places

console.log("-----------string numbers into Numbers with parseFloat ------------")
val = parseFloat('100.35896')

console.log(val)
console.log(typeof val);
console.log(val.toFixed(4)); // the 2 will five give us the same value but to 2 decimal places


const val1 = 5
const val2 = 6
const sum = val1 + val2
console.log(sum)
console.log(typeof sum)