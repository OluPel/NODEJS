// `buffer`: The module provide ways to handle binary data. Example application of this module would be to encode and decode data in different formats, such as Base64 or hexadecimal.

// import { Buffer } from 'node:buffer';


// Creating a buffer
const buff = Buffer.from('How are you?', 'utf8');

// Converting a buffer to a string
console.log(buff.toString('hex'));

console.log(buff.toString('base64'));
