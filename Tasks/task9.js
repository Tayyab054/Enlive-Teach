// Convert Privitive to Object
let striPrimitive = 'Hello';
let striObject = new String(striPrimitive);
console.log(typeof striPrimitive); // 'string'
console.log(typeof striObject); // 'object'
 
let numPrimitive = 42;
let numObject = new Number(numPrimitive);
console.log(typeof numPrimitive); // 'number'
console.log(typeof numObject); // 'object'

let boolPrimitive = true;
let boolObject = new Boolean(boolPrimitive);
console.log(typeof boolPrimitive); // 'boolean'
console.log(typeof boolObject); // 'object'

let bigIntPrimitive = 1234n;
let bigIntObject = Object(bigIntPrimitive);
console.log(typeof bigIntPrimitive); // 'bigint'
console.log(typeof bigIntObject); // 'object'

let symPrimitive = Symbol('description');
let symObject = Object(symPrimitive);
console.log(typeof symPrimitive); // 'symbol'
console.log(typeof symObject); // 'object'

let nullValue = null;
let nullObject = Object(nullValue);
console.log(typeof nullValue); // 'object' (this is a quirk in JavaScript)
console.log(nullObject); // TypeError: Cannot convert null to object



//Convert Object to Primitive
console.log(striObject.valueOf()); // 'Hello'
console.log(numObject.valueOf()); // 42
console.log(boolObject.valueOf()); // true

//using toString method
console.log(striObject.toString()); // 'Hello'
console.log(numObject.toString()); // '42'
console.log(boolObject.toString()); // 'true'
