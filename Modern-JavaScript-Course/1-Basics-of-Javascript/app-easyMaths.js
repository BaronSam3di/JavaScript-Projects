const num1 = 100;
const num2 = 50;

let val;

console.log("--------- Very simple math with numbers ---------")

console.log(" Here we are runnig ")
console.log("num1 = ", num1)
console.log("num2 = ", num2)
console.log("---- val = num1 + num1 ---")
val = num1 + num1
console.log("---- console.log(val) >> OutPuts :", val)
console.log()

console.log(" Here we are runnig ")
console.log("---- val = num1 * num1 ---")
val = num1 * num2
console.log("---- console.log(val) >> OutPuts :", val)
console.log()

console.log(" Here we are runnig ")
console.log("---- val = num1 - num1 ---")
val = num1 - num2
console.log("---- console.log(val) >> OutPuts :", val)
console.log()

console.log(" Here we are runnig ")
console.log("---- val = num1 / num1 ---")
val = num1 / num2
console.log("---- console.log(val) >> OutPuts :", val)
console.log()

console.log(" Here we are runnig ")
console.log("---- val = num1 % num1 ---")
val = num1 & num2
console.log("---- console.log(val) >> OutPuts :", val)
console.log()

console.log()
console.log()

console.log("----- The Math Object -----")

val = Math.PI;
console.log(val)

val = Math.E;
console.log(val)

val = Math.round(2.4);
console.log(val)

val = Math.ceil(2.4);
console.log(val)

val = Math.floor(2.8);
console.log(val)

val = Math.abs(-3);
console.log(val)

val = Math.pow(8,2);
console.log(val)

val = Math.sqrt(64);
console.log(val)

val = Math.min(2,33,4,1,55,6,3,-2);
console.log(val)

val = Math.max(2,33,4,1,55,6,3,-2);
console.log(val)

val = Math.random();
console.log(val)

val = Math.floor(Math.random() * 20 + 1); 
console.log(val)