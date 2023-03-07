// http: The module creates HTTP servers and clients. Example of the module is to create a web server that responds to HTTP requests.

const http = require('http');
// Creating an HTTP server
const server = http.createServer((request, resrponse) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello world!\n');
});
server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});
