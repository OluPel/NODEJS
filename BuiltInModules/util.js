// Uutil(Utility) : The Moduleis used to generate  utility functions that are helpful for working with objects and functions. Example of the module is used to custom error objects or to inspect object properties.

const util = require('util');
// Inspect an object
const objectToInspect = {
  name: 'Pelumi',
  age: 30,
  email: 'olukayodepelumipeace@gmail.cicom',
};
const inspectedObject = util.inspect(objectToInspect, { colors: true });
console.log(inspectedObject); 
