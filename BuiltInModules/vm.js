// VM(Virtual Machine): The module provides a way to execute JavaScript code in a sandboxed environment/ Virtual Machines. Example of the module is to evaluate user-defined code in a secure way.

const vm = require('vm');
// create a new context for the script
const context = vm.createContext({});
// define a variable in the context
vm.runInContext('var x = 1000;', context);
// evaluate an expression in the context
const expectedResult = vm.runInContext('x / 2', context);
console.log(expectedResult); 
