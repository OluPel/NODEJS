// net: The module is used to create TCP (Transmission Control Protocol)servers and clients. Example of the module w create a chat server that uses TCP (Transmission Control Protocol)) sockets to communicate with clients

const net = require('net');
const server = net.createServer(socket => {
  console.log('Client connected');
  socket.on('data', data => {
    console.log(`Data Recieved Successfully: ${data}`);
  });
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
