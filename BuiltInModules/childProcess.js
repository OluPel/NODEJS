// childProcess: The provides a way to spawn child processes from a Node.js application. Example of applying this module is to execute external commands, such as running a shell script or CLI codes

const { exec } = require('child_process');

// Execute a shell command
exec('dir', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
