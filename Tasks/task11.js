//Write an example where hoisting creates unexpected behavior in a loop, then fix it.  
for (var i = 1; i <= 3; i++) {
        console.log("Loop is running, i =", i); // runs immediately
    setTimeout(function() {
        console.log("Number:", i); // Expect 1, 2, 3
    }, 1000);
}
console.log("Loop finished, i =", i); // runs right after loop

for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log("Number:", i);
    }, 1000);
}
for (var i = 1; i <= 3; i++) {
    (function(iCopy) {
        setTimeout(function() {
            console.log("Number:", iCopy);
        }, 1000); 
    })(i);
} 


