function makeLargeNestedObject(depth, breadth) {
  if (depth === 0) return "value";
  const obj = {};
  for (let i = 0; i < breadth; i++) {
    obj[`key${i}`] = makeLargeNestedObject(depth - 1, breadth);
  }
  return obj;
}

const bigObj = makeLargeNestedObject(4, 5); // 4 levels deep, 5 keys per level

console.time("shallow");
const shallowCopy = { ...bigObj };
console.timeEnd("shallow");

console.time("deep");
const deepCopy = structuredClone(bigObj);
console.timeEnd("deep");
