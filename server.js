const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hellow Wolrd');
});

server.listen(3000);
console.log("Server on Port3000");