function greetingFunction(hourse){
    let greeting ;
    if(hourse >= 0 && hourse < 12){
        greeting = "Good morning";
    }
    else if(hourse >= 12 && hourse < 18){
        greeting = "Good afternoon";
    }
    else if(hourse >= 18 && hourse < 24){
        greeting = "Good evening";
    }
    else {
        greeting = "Invalid hour";
    }
    return function(name){
        return `${greeting},${name}`
    }
}
// Example usage:
const morningGreeter = greetingFunction(9);
console.log(morningGreeter("Tayyab")); // Good Morning, Tayyab!

const afternoonGreeter = greetingFunction(15);
console.log(afternoonGreeter("Ali")); // Good Afternoon, Ali!

const eveningGreeter = greetingFunction(21);
console.log(eveningGreeter("Adan")); // Good Evening, Adan!
