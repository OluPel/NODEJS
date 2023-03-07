// fs (FileSystem): The module provides a way to interact with the file system. Example of the module is to read or write files on the disk.
const fs = require('fs');

// Reading a file
fs.readFile('./fs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
