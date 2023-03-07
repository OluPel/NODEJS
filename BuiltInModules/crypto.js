// crypto: The module provides cryptographic functionality functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.. Example of the module is to secure data transfer over the network.

// const crypto = require('crypto');
const { createHmac } = require('node:crypto');

// Hashing a string


const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);


// const hash = crypto.createHash('sha256');
// hash.update('Hello, world!');
// console.log(hash.digest('hex'));
