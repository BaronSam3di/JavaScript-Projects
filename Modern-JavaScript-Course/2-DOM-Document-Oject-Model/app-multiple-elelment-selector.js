// ----- document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items) // this will return an html collection, where each collection item will be in an index
// console.log();
// console.log(items[0]); //the items can be index like an array

// items[0].style.color = 'red'
// items[3].textContent = 'BOOOM'

// console.log("We don't have to just use this on a global scope");

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems)

// ---------------------------------------------------------------------------------
// // ---- document.getElementsByTagname -- same as a bove but we are selecting by tge Tagname as apposed to the class
// let lis = document.getElementsByTagName('li');
// console.log(lis) // this will return an html collection, where each collection item will be in an index
// console.log(lis[0]);
// lis[0].style.color = 'red'
// lis[0].textContent = 'Hello'
// // console.log(lis[0]); //the items can be index like an array

// // convert HTML collection into an array so that we cna do array things with it. 
// lis = Array.from(lis)

// lis.reverse();  // now we can use Array methods

// // this function lets us change all items in the collection
// lis.forEach(function(li, index){
//     console.log(li.className)
//     li.textContent = `${index}:Hello`
// });
// // ---------------------------------------------------------------------------------
// ---- document.querySelectorAll --

const items = document.querySelectorAll('ul.collection li.collection-item'); 

items.forEach(function(li, index){  // notice, because this is a node list, we don't need to convert the items to Arrays to run this
    li.textContent = `${index}:Hello`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
// 1st method of changing Lis
liOdd.forEach(function(li, index){  // notice, because this is a node list, we don't need to convert the items to Arrays to run this
    li.style.background = '#ccc'
});
// Alternative method of changing Lis
for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'red';
}

console.log(items)