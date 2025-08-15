// Generic key transformer: returns a NEW object
function transformKeys(obj, keyFn, valueFn = v => v) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [keyFn(key, value), valueFn(value, key)])
  );
}
const user = { first_name: "John", last_name: "Doe", age: 25 };

const upper = transformKeys(user, k => k.toUpperCase());
console.log(upper); // { FIRST_NAME: "John", LAST_NAME: "Doe", AGE: 25 }

const toCamel = k => k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
const trimIfString = v => (typeof v === "string" ? v.trim() : v);

const camelUser = transformKeys(user, toCamel, trimIfString);
console.log(camelUser); // { firstName: "John", lastName: "Doe", age: 25 }

const prefixed = transformKeys(user, k => `user_${k}`);
console.log(prefixed); // { user_first_name: "John", user_last_name: "Doe", user_age: 25 }

const unprefix = (k, _v) => k.replace(/^user_/, "");
const unprefixed = transformKeys(prefixed, unprefix);
console.log(unprefixed); // back to original keys


const product = { id: 10, product_name: "  Pencil  ", in_stock: true };

// Object → Array of [key, value]
const entries = Object.entries(product);
// Transform: snake_case → camelCase + trim string values
const transformedEntries = entries.map(([k, v]) => [
  k.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),
  typeof v === "string" ? v.trim() : v
]);
// Array → Object
const result = Object.fromEntries(transformedEntries);

console.log(result); // { id: 10, productName: "Pencil", inStock: true }


const rows = [
  { user_id: 1, full_name: " Alice " },
  { user_id: 2, full_name: " Bob " },
];

const cleanRows = rows.map(r => transformKeys(
  r,
  k => k.replace(/_([a-z])/g, (_, c) => c.toUpperCase()), // to camelCase
  v => (typeof v === "string" ? v.trim() : v)             // trim strings
));

console.log(cleanRows);
// [ { userId: 1, fullName: "Alice" }, { userId: 2, fullName: "Bob" } ]
