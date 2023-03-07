// cluster: processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads. When process isolation is not needed, use the worker_threads module instead, which allows running multiple application threads within a single Node.js instance.
//This module provides a way to create child processes that share server ports. An example application of this module would be to create a cluster of workers that can handle incoming HTTP requests.



const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
            if (cluster.isSecondary) {
                console.log(`Secondary ${process.pid} is running`);

  // Fork Servants
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (servant, code, signal) => {
    console.log(`Servants ${servant.process.pid} killed`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200); res.end('Hello World');
  }).listen(4000);

  console.log(`Servants ${process.pid} started`);
}
