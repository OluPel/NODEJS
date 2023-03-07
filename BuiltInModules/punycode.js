//Punycode: The module in Node.js provides the functionality for encoding and decoding Unicode strings to and from Punycode

const punycode = require('punycode.js');
// encode a Unicode string to Punycode
const encoded = punycode.encode('googlecom');
console.log(encoded); // 'espa-ol-4ta.com'

// decode a Punycode string to Unicode
const decoded = punycode.decode('xn--espaol-zwa.com');
console.log(decoded); // 'español.com'

// compare two Unicode strings, ignoring case and accents
const str1 = 'Café';
const str2 = 'cafe\u0301';
const cmp = punycode.ucs2.compare(
  punycode.ucs2.encode(str1.normalize('NFKD')),
  punycode.ucs2.encode(str2.normalize('NFKD'))
);
console.log(cmp === 0);
