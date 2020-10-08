console.log("------ Switches -------")

const colour = 'red'

console.log(" Switch is best used when ther eis allot of different cases and needs a default ")
switch(colour){
    case 'red' :
        console.log(' Colour is Red')
        break
    case 'blue' :
        console.log(' Colour is Blue')
        break
    default :
        console.log(' Colour is not set')
        break
}
let day;

// set up different cases fpr the switch
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break
    case 1:
        day = 'Monday';
        break  
    case 2:
        day = 'Tuesday';
        break  
    case 3:
        day = 'Wednesday';
        break  
    case 4:
        day = 'Thursday';
        break  
    case 5:
        day = 'Friday';
        break  
    case 6:
        day = 'Saturday';
        break   
}

console.log(`Today is ${day}`)