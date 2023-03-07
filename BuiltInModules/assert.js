// The assert module provides a way of testing expressions and assertion functions for verifying invariants. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.
// import { strict as assert } from 'node:assert';

// var assert = require('assert');
// assert(5 > 7);


const http = require('http');
const assert = require('assert');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('How are you?');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
  assert.strictEqual(server.listening, true, 'Server is not listening');
});
