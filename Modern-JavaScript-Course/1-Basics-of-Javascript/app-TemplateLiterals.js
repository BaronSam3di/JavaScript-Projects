// Template strings, Template literals, Formatted strings
console.log(" ---- Template strings, Template literals, Formatted strings ------")
console.log()
const name = 'John'
const age = '23'
const occupation = 'Chef'
const city = 'Bedford'

console.log(" ---- Without template strings ------")
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + occupation 
+ ' </li><li>City: ' + city + '</li></ul';

console.log("---- With Template strings -----")
console.log(" We use back ticks >>  \`  << like that ")

function hello() {
    return 'HEEEEYYYYYYy';
}

html = ` 
<ul>
    <li>Name :${name}</li>
    <li>Age : ${age}</li>
    <li>Occupation : ${occupation}</li>
    <li>City : ${city}</li>
    <li>Greeting : ${hello()}</li>
    <li>Has life started yet?  : ${ age > 40 ? "yes; over 40 " :  "NO ; under 40" }</li>  
</ul>
`
// this {a ? B : C } is called a turnery - if A then B else C 


document.body.innerHTML = html;