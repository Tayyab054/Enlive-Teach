                                    // Task 1
// Write a "for" loop that will perform exactly the same repetitive code as this:

console.log(1)  // actual code 
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
 // for loop solution
for (let i = 1; i <= 5; i++) { 
    console.log(i);
}
console.log('Counting completed!');

                           // Task 2 
//Write a "for" loop that will perform exactly the same repetitive code as this:

console.log(5)   // actual code
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
// for loop solution
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log('Countdown finished!');

                            //Task 3
//Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
// while loop solution
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
console.log('Counting completed!');

                                  //Task 5
//Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
var year = 2018;
while (year <= 2022) {
    console.log(year);
    year++;
}
 
 // reading 
var cubes = 'ABCDEFG';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

// for (var i = 0; i < document.body.children.length; i++) {
//     document.body.children[i].style.cssText =
//         "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
// }
// let container = document.getElementById("word");
// let text = container.innerText;  // "ABC"
// container.innerHTML = "";        // Clear original text

// for (let i = 0; i < text.length; i++) {
//     let span = document.createElement("span");
//     span.innerText = text[i]+ ""; // Add space after each letter
//     span.style.cssText =
//         "display: inline-block; font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple; text-align: center; margin: 5px; width: 50px; height: 50px; line-height: 50px;";
//     container.appendChild(span);
//}
