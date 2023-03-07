// TTY (Teletypewriter): The modules creats way to interact with a terminal. An example application of this module would be to create a command-line interface (CLI)that uses colors and formatting.



var tty = require('tty');  
process.stdin.setRawMode(true);  
process.stdin.resume();  
 console.log('I am starting now');  
process.stdin.on('keypress', function(char, key) {  
  if (key && key.ctrl && key.name == 'c') {  
     
    process.exit()  
  }  
});  