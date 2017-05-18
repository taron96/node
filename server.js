'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
        <body>
          <h1>Some header!</h1>
          <p>body =P</p>
        </body>
      </html>
      `);
  } else {
    res.end('UNKNOWN');
  }
});
server.listen(8080, () => console.log('started our server'));
