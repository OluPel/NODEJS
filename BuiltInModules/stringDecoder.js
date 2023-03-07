// StringDecoder`: The module provides pn how to decode Buffer objects into strings. Example of the module is to decode binary data into text.

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const buff = Buffer.from('Hello World', 'utf8');
console.log(decoder.write(buff)); 
