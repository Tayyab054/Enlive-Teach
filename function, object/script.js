function letterFinder(word ,match){
    for(var i=0;i<word.length;i++)
        if(word[i]==match){
            console.log("Found the ",match,"at",i);
        }
        else {
            console.log("---No match found at",i);
        }
}
letterFinder("test","t");

///////////////////////////////////////////

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
console.log(arrOfKeys)

for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
  ///////////////////////////////////////////////////
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
fruits.pop(); // removes 'pear', fruits is now ['apple']
console.log(fruits); // ['apple']

//////////////////////////////////////////////////////

var clothes=[];
clothes.push("shirt");
clothes.push("pants");
clothes.push("jacket");
clothes.push("shoes");
clothes.push("hat");
clothes.pop("hat");
clothes.push("socks");
console.log(clothes[2]);
console.log("-----------------------",clothes[2],"-----------------------");

////////////////////////////////////////////////////////////

var FavCar = {};
FavCar.color= "red";
FavCar.convertable= true;
console.log(FavCar);