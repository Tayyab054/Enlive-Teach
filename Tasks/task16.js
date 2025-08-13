function myMap(arr, callback, thisArg) {
  if (!Array.isArray(arr)) throw new TypeError("First arg must be an array");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");

  const len = arr.length >>> 0;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in arr) { // skip holes in sparse arrays
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
    // if hole, leave hole in result
  }
  return result;
}

function myFilter(arr, callback, thisArg) {
  if (!Array.isArray(arr)) throw new TypeError("First arg must be an array");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");

  const len = arr.length >>> 0;
  const result = [];

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

function myReduce(arr, callback, initialValue) {
  if (!Array.isArray(arr)) throw new TypeError("First arg must be an array");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");

  const len = arr.length >>> 0;

  // Find starting accumulator and index
  let i = 0;
  let acc;

  if (arguments.length >= 3) {
    acc = initialValue;
  } else {
    // No initialValue: find first defined element
    while (i < len && !(i in arr)) i++;
    if (i >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = arr[i++];
  }

  for (; i < len; i++) {
    if (i in arr) {
      acc = callback(acc, arr[i], i, arr);
    }
  }
  return acc;
}
// myMap
console.log(myMap([1,2,3], x => x * 2));           // [2,4,6]
console.log(myMap([, 10, , 30], x => x + 1));      // [empty, 11, empty, 31]

// myFilter
console.log(myFilter([1,2,3,4], x => x % 2 === 0)); // [2,4]
console.log(myFilter([, 2, , 4], x => x));          // [2,4]

// myReduce
console.log(myReduce([1,2,3,4], (a,b) => a + b, 0)); // 10
console.log(myReduce([1,2,3,4], (a,b) => a + b));    // 10
// myReduce([], (a,b)=>a+b);                         // throws TypeError
