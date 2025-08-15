/**
 * Deep clone a JS value without JSON.stringify.
 * 
 * Options:
 *   - cloneFunctions: "byRef" | "attemptClone"
 *       byRef        -> return the same function reference (default, safest)
 *       attemptClone -> best-effort to recreate non-native functions from source (may fail)
 */
function deepClone(value, options = { cloneFunctions: "byRef" }, _seen = new WeakMap()) {
  const { cloneFunctions = "byRef" } = options;

  // Primitives (also handles null & symbols)
  if (value === null || typeof value !== "object") {
    // For functions, fall through below (typeof function === 'function')
    if (typeof value !== "function") return value;
  }

  // Functions
  if (typeof value === "function") {
    if (cloneFunctions === "attemptClone") {
      const src = Function.prototype.toString.call(value);
      // Avoid cloning native/bound functions
      if (/\[native code\]|\bbound\b/.test(src)) return value;
      try {
        // Try to reconstruct with the same body; this loses closures & prototype bindings.
        // eslint-disable-next-line no-new-func
        const fn = eval(`(${src})`);
        // Copy own props/descriptors of the function object itself
        copyOwnProps(value, fn, options, _seen);
        return fn;
      } catch {
        return value; // fallback to by-ref if parsing fails
      }
    }
    return value; // safest
  }

  // Handle cycles
  if (_seen.has(value)) return _seen.get(value);

  // Built-ins and special cases
  const tag = Object.prototype.toString.call(value); // e.g. [object Date]
  switch (tag) {
    case "[object Date]":
      return new Date(value.getTime());

    case "[object RegExp]": {
      const re = new RegExp(value.source, value.flags);
      re.lastIndex = value.lastIndex;
      return re;
    }

    case "[object Map]": {
      const out = new Map();
      _seen.set(value, out);
      value.forEach((v, k) => {
        out.set(deepClone(k, options, _seen), deepClone(v, options, _seen));
      });
      return out;
    }

    case "[object Set]": {
      const out = new Set();
      _seen.set(value, out);
      value.forEach((v) => {
        out.add(deepClone(v, options, _seen));
      });
      return out;
    }

    case "[object ArrayBuffer]":
      return value.slice(0);

    case "[object DataView]": {
      const clonedBuffer = deepClone(value.buffer, options, _seen);
      return new DataView(clonedBuffer, value.byteOffset, value.byteLength);
    }

    // Typed arrays
    case "[object Int8Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Int16Array]":
    case "[object Uint16Array]":
    case "[object Int32Array]":
    case "[object Uint32Array]":
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object BigInt64Array]":
    case "[object BigUint64Array]": {
      // Recreate with same constructor
      const Ctor = value.constructor;
      return new Ctor(value);
    }

    case "[object Error]": {
      const err = new value.constructor(value.message);
      if (value.name) err.name = value.name;
      if (value.stack) err.stack = value.stack;
      // Copy custom props
      copyOwnProps(value, err, options, _seen);
      return err;
    }

    case "[object Promise]":
      // Cloning promises doesn't make sense; return same reference
      return value;
  }

  // Arrays or general objects (including class instances)
  const proto = Object.getPrototypeOf(value);
  const out = Array.isArray(value) ? [] : Object.create(proto);
  _seen.set(value, out);

  copyOwnProps(value, out, options, _seen);
  return out;
}

// Helper: copy all own properties (including non-enumerables & symbols) using descriptors
function copyOwnProps(src, target, options, _seen) {
  const descriptors = Object.getOwnPropertyDescriptors(src);
  for (const key of Reflect.ownKeys(descriptors)) {
    const desc = descriptors[key];
    if ("value" in desc) {
      desc.value = deepClone(desc.value, options, _seen);
    }
    // getters/setters (functions) are copied by reference via descriptor
    Object.defineProperty(target, key, desc);
  }
  return target;
}
// quick demos
// 1) Circular references
const a = { name: "A" };
a.self = a;
const a2 = deepClone(a);
console.log(a2 !== a, a2.self === a2); // true, true

// 2) Dates, RegExps
const obj1 = { d: new Date(), r: /ab+c/gi };
const obj2 = deepClone(obj1);
console.log(obj2.d instanceof Date, obj2.r instanceof RegExp); // true, true
console.log(obj2.r.source === obj1.r.source && obj2.r.flags === obj1.r.flags); // true

// 3) Maps & Sets
const m = new Map([[{ k: 1 }, new Set([1, 2])]]);
const m2 = deepClone(m);
console.log(m2 !== m, [...m2.keys()][0] !== [...m.keys()][0]); // true, true

// 4) Typed arrays & buffers
const ta = new Uint8Array([1,2,3]);
const ta2 = deepClone(ta);
ta2[0] = 9;
console.log(ta[0], ta2[0]); // 1, 9

// 5) Non-enumerables, symbols, descriptors
const sym = Symbol("id");
const o = {};
Object.defineProperty(o, "hidden", { value: 42, enumerable: false });
o[sym] = "secret";
const o2 = deepClone(o);
console.log(Object.getOwnPropertyDescriptor(o2, "hidden").enumerable); // false
console.log(o2[sym]); // "secret"

// 6) Functions
function add(a, b) { return a + b; }
const fobj = { add };
const f2 = deepClone(fobj); // byRef (default)
console.log(f2.add === add); // true
