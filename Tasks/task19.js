if (typeof Object.assign !== 'function') {
  Object.assign = function(target, ...sources) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    let to = Object(target); // ensure target is an object

    for (let source of sources) {
      if (source != null) {
        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            to[key] = source[key];
          }
        }
      }
    }

    return to;
  };
}
let source = {
  name: 'Alice',
  address: { city: 'Lahore' }
};

let target = Object.assign({}, source);

target.name = 'Bob';         // affects only target
target.address.city = 'Karachi'; // affects BOTH target and source!

console.log(source.name);    // "Alice"  (primitive copied by value)
console.log(source.address.city); // "Karachi" (object copied by reference)
