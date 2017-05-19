'use strict';

const http = require('http');
const {upper, lower, PORT} = require('./ports');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
        <body>
          <h1>${upper(__dirname)}</h1>
          <h1>${lower(__dirname)}</h1>
        </body>
      </html>
      `);
  } else {
    res.end('UNKNOWN');
  }
});
server.on('connection', (socket) => {
  console.log('Someone connected', socket);
});
server.listen(PORT, () => console.log('started our server'));
