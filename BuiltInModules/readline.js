// readline: The module helps us to read input from a terminal/ users. Example of the module is creating a command-line interface(CLI) for a Node.js application.

const readline = require('readline');
const ReadLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
ReadLine.question('How are you? ', (question) => {
  console.log(`Good you're, ${question}`); 
  ReadLine.close();
});
