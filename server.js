const os = require('os');
const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === 'favicon.ico') {
    response.writeHead(200, { 'Content-Type': 'image/x-icon' });
    response.end();
    console.log('favicon requested');
    return;
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  console.log('I have been hit');
  response.end(
    JSON.stringify({
      message: request.connection.remoteAddress,
      net: os.networkInterfaces()
    })
  );
});

server.listen(3000);

console.log('Server listening at http://localhost:3000/');
