const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter {};
//initalize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req,res) => {
  console.log(req.url, req.method);

  const extension = path.extname(req.url);

  let contentType;
  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'text/jpg';
      break;
    case '.png':
      contentType = 'text/png';
      break;
    case '.txt':
      contentType = 'text/plain';
      break;
  
    default:
      contentType = 'text/html';
      break;
  }

})

server.listen(PORT, () => console.log(`Server running on port. ${PORT}`));

// //add listener for log event
// myEmitter.on('log', (msg) => logEvents(msg));