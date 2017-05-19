'use strict';

const http = require('http');
const p = require('./ports');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
        <body>
          <h1>${p.upper(__dirname)}</h1>
          <h1>${p.lower(__dirname)}</h1>
        </body>
      </html>
      `);
  } else {
    res.end('UNKNOWN');
  }
});
server.listen(8080, () => console.log('started our server'));
