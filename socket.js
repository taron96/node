const net = require('net');
const sock = new net.Socket;
sock.on('connect', () => {
  sock.write('GET /en/ HTTP/1.1 \r\n');
  sock.write('Host: istc.am');
  sock.write('\r\n\r\n');
});

sock.setEncoding('utf-8');

const total_data = [];

sock.on('data', d => total_data.push(d));

const obj = {
  headers: [],
  body: []
}

const func = (total) => {
  const data = total[0].split('\r\n\r\n');
  const headers = data[0].split('\r\n');
  for (const i of headers) {
    obj.headers.push(i);
  }
  const body = data[1].split('\n');
  for (const i of body) {
    obj.body.push(i);
  }
  console.log(obj.headers.length);
  for (const i of obj.headers) {
    console.log(i);
  }
  console.log('\n\n\n');
  console.log(obj.body.length);
  for (const i of obj.body) {
    console.log(i);
  }
}

sock.on('end', () => {
  total_data.reduce((prev, total) => prev + total);
  func(total_data);
});

sock.connect({
  port: 80,
  host: 'istc.am'
});
