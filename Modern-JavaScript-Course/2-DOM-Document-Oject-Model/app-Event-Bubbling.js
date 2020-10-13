console.log("Event bubbling - the bubbling up of events through the DOM. When an event happens on a particular element , it will bubble up though its parents. ")
// EVENT BUBBLING 

// // -- this will print 'card title' when the Title is pressed
// document.querySelector('.card-title').addEventListener('click',
// function(){
//   console.log('card title')  
// })

// document.querySelector('.card-content').addEventListener('click',
// function(){
//   console.log('card content')  
// })

// document.querySelector('.card').addEventListener('click',
// function(){
//   console.log('card')  
// })

// document.querySelector('.col').addEventListener('click',
// function(){
//   console.log('card col')  
// })
// // ---------------------------------------------------------

// EVENT DELEGATION - Kind of like the opposite of Event Bubbling

// -- these two lines below show whey event delegation is needed
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click',deleteItem)

function deleteItem(event){
    // One way of doing deleting items but not the best because the names might change
    // if(event.target.parentElement.className === 'delete-item secondary-content'){ 
    //     console.log('delete item')
    // }
    
    // A better way to do it
    if(event.target.parentElement.classList.contains('delete-item')){ 
            console.log('delete item');
            event.target.parentElement.parentElement.remove();
        }

    

}
