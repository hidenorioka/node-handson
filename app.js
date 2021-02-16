const http = require('http');

const PORT_NUMBER = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>Hello World</h1>');
  res.end();
});
server.listen(PORT_NUMBER);
console.log('Server listen on Port: ' + PORT_NUMBER);