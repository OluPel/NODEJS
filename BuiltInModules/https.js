// https: The module creates HTTPS servers and clients. Example of the module is to create a secure web server that uses SSL(Secure Sockets Layer)/TLS (Transport Layer Security)encryption.

const https = require('https');
const options = {
  hostname: 'example.com',
  path: '/path/to/resource',
  method: 'GET'
};
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});
req.on('error', error => {
  console.error(error);
});
req.end();
