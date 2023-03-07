const http = require("http");
const getnames = require("./Uploadnames.js");

const PORT = 3030;

const server = http.createServer((req, res) => {
    getnames(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});

console.log('Server is running on http://127.0.0.1:3030/ Click to access');