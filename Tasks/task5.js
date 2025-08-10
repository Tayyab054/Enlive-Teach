function doSomething() {
    leakedVar = "Oops! I'm global now"; // no var/let/const → becomes global
}

doSomething();

console.log(leakedVar);

 //  Use Closure / Local Variable
// function doSomething() {
//     let leakedVar = "I'm safe inside the function"; // declared properly
//     console.log(leakedVar); // works inside
// }

// doSomething();

// // console.log(leakedVar); // 

// (function() {
//     let leakedVar = "I'm private inside IIFE";
//     console.log(leakedVar); // works here
// })(); // runs immediately

// console.log(leakedVar);