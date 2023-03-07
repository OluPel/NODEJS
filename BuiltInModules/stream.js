// stream: The module provides a way to work with streams of data. Example of the module is to create a streaming API for a Node.js application.

var fs = require("fs");

async function logText(readable) {
  for await (const text of readable) {
    console.log(text);
  }
}

const readable = fs.createReadStream(
  'tmp/test.txt', {encoding: 'utf8'});
logText(readable);
