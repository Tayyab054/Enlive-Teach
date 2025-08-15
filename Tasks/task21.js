const user = {
  name: "Alice",
  age: 25
};

Object.seal(user);

user.age = 26;           // ✅ Allowed (modifying existing property)
user.country = "USA";    // ❌ Ignored (can't add new property)
delete user.name;        // ❌ Ignored (can't delete property)

console.log(user); // { name: 'Alice', age: 26 }
console.log(Object.isSealed(user)); // true


const config = {
  apiURL: "https://api.example.com",
  retries: 3
};

Object.freeze(config);

config.retries = 5;          // ❌ Ignored (can't modify value)
config.timeout = 2000;       // ❌ Ignored (can't add property)
delete config.apiURL;        // ❌ Ignored (can't delete property)

console.log(config); // { apiURL: 'https://api.example.com', retries: 3 }
console.log(Object.isFrozen(config)); // true


const data = {
  name: "App",
  settings: {
    theme: "dark"
  }
};

Object.freeze(data);

data.settings.theme = "light"; // ✅ Still changes! (nested object not frozen)

console.log(data.settings.theme); // "light"
