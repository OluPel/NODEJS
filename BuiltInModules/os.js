// OS (Operatin System): The module gives information about the operating system. Example of this module is to get the amount of free memory or the number of CPUs on the system.

const os = require('os');
// Getting the hostname
console.log('Hostname:', os.hostname());
// Getting the number of CPU cores
console.log('CPU cores:', os.cpus().length);
