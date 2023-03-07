// dns:(Domain Name System) The module provides module enables name resolution to lookups and hostname. Example of the module is to use it to look up IP addresses of host names.

// const dns = require('dns');


const dns = require('node:dns');

// Resolving a hostname to an IP address
dns.resolve('www.example.com', 'A', (err, addresses) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(addresses);
});


dns.lookup('www.example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
