// Example data
const user1 = {
  name: "Alice",
  address: {
    city: "Karachi",
    zip: "74000"
  }
};

// Shallow copy using spread
const user2 = { ...user1 };

// Modify nested object in the copy
user2.address.city = "Lahore";

console.log("user1 city:", user1.address.city); // 😱 "Lahore"
console.log("user2 city:", user2.address.city); // "Lahore"

// deep copyfix
/*const user1 = {
  name: "Alice",
  address: { city: "Karachi", zip: "74000" }
};

const user2 = structuredClone(user1);
user2.address.city = "Lahore";

console.log("user1 city:", user1.address.city); // "Karachi"
console.log("user2 city:", user2.address.city); // "Lahore"
*/

// Using JSON.parse(JSON.stringify()) (old-school, but works)

// ⚠️ Loses functions, Date, Map, Set, undefined values, etc.

/*const user1 = {
  name: "Alice",
  address: { city: "Karachi", zip: "74000" }
};

const user2 = JSON.parse(JSON.stringify(user1));
user2.address.city = "Lahore";

console.log("user1 city:", user1.address.city); // "Karachi" */

            // . Writing your own deep copy function (handles nested objects/arrays)
/* function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepCopy);

  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const user1 = {
  name: "Alice",
  address: { city: "Karachi", zip: "74000" }
};

const user2 = deepCopy(user1);
user2.address.city = "Lahore";

console.log("user1 city:", user1.address.city); // "Karachi" */