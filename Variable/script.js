    //  scope //
    
    {
        let x = 10;
        var y = 20;
    }

    console.log(x); // ReferenceError: x is not defined
    console.log(y); // 20




var petDog="Rex";
var petcat="Pepper";
console.log(petDog);
console.log(petcat);
console.log("My pet dog's name is: "+petDog);
console.log("my pet cat's name is : "+petcat);
var catsound ="purr";
var dogsound="woof";
console.log(petDog +"says"+dogsound);
console.log(petcat+"says"+catsound);
var catsound="meow";
console.log(petcat+"now says"+catsound);
//---------------------------------- oprations ----------------------------------//
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
console.log(10 > 9 && 10 < 17);
console.log(true && true);
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);
var currentTime = 7;
console.log(true || false);
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);
var petHungry = true;
petHungry = !petHungry;
console.log(22 % 5); // 2
console.log(5 !== "5")
"inter" + "net" // "internet"
"note" + "book" // "notebook"
365 + " days" // "365 days"
12 + " months" // "12 months"
1 + "2" // "12"
///
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9

//
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

//
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."

/////////////////////////////////////////////
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10)


var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

console.log(5 + 10); // 15

var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d); // "Now in 3D!"

var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // 8


