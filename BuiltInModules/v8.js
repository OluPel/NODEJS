// v8: The module provides access to the V8 engine, which is the JavaScript engine used by Node.js. 

const v8 = require("v8");
// serialize an object
const data = { name: "John", age: 30 };
const serializedData = v8.serialize(data);
console.log(serializedData);
