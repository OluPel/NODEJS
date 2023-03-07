// workerThreads: The module helps us to create worker threads in a Node.js application. Example of the module would be to offload CPU-intensive tasks to a separate thread to avoid blocking the event loop.

const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename, {workerData: "How are you?"});
  worker.on("message", msg => console.log(`Worker message received: ${msg}`));
  worker.on("error", err => console.error(error));
  worker.on("exit", code => console.log(`Worker exited with code ${code}.`));
}
else {
  const data = workerData;
  parentPort.postMessage(`You said \"${data}\".`);
}