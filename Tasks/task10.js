// function declaration hoisting
sayHello(); // ✅ Hello
function sayHello() {
  console.log('Hello');
}
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi=() => {
  console.log('Hi');
}

saybye(); //  ❌ ReferenceError: Cannot access 'sayBye' before initialization
const saybye=() => {
  console.log('Bye');
}