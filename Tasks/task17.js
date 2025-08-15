function flattenDeep(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      // If the element is an array, flatten it recursively
      return acc.concat(flattenDeep(val));
    } else {
      // Otherwise, just add the element
      return acc.concat(val);
    }
  }, []);
}

// Example:
const nestedArray = [1, [2, [3, [4, [5]]]], 6];
const flatArray = flattenDeep(nestedArray);

console.log(flatArray); // [1, 2, 3, 4, 5, 6]
