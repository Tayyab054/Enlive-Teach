function deepEqualiy(a, b) {
    if (a === b) return true;
    if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
        return true;
    }
    //Check if both are objects (not null)
    if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
        // compare array
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (!deepEqualiy(a[i], b[i])) return false;
            }
            return true;
        }
        // if one is an array and the other is not
        if (Array.isArray(a) !== Array.isArray(b)) {
            return false;
        }
        // compare objects
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqualiy(a[key], b[key])) {
                return false;
            }

        }
        return true;
    }
    return false;
}

console.log(deepEqualiy(1, 1)); // true
console.log(deepEqualiy(NaN, NaN)); // true
console.log(deepEqualiy([1, 2, { a: 3 }], [1, 2, { a: 3 }])); // true
console.log(deepEqualiy({ a: [10, 20] }, { a: [10, 20] })); // true
console.log(deepEqualiy({ x: { a: 1 }, x: { a: 1, b: 2 } })); // false
console.log(deepEqualiy([1, 2], [1, 2, 3])); // false


