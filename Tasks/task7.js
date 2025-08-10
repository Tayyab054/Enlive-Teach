function getType(value){
    if(value=='number'&& value==isNaN(value)){
        return 'NaN';
    }
    if (value === null) {
        return 'null';
    }
    const type = typeof value;
    if(type!== 'object'){
        return type;
    }
    const rawtype=Object.prototype.toString.call(value);
    return rawtype.slice(8, -1).toLowerCase();
}
console.log(getType(1)); // 'number'
console.log(getType('hello')); // 'string'
console.log(getType(NaN)); // 'nan'
console.log(getType(true)); // 'boolean'
console.log(getType(null)); // 'null'
console.log(getType(undefined)); // 'undefined'
console.log(getType([])); // 'array'
console.log(getType({})); // 'object'
console.log(getType(function(){})); // 'function'
console.log(getType(NaN)); // 'nan'
console.log(getType(new Date())); // 'date'
console.log(getType(new Set())); // 'set'
console.log(getType(new Map())); // 'map'
