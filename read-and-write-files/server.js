const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname, 'files', 'starter.txt') , 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
  if (err) throw err;
  console.log('Write completed.');

  fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
    if (err) throw err;
    console.log('Append completed.');

    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'new-reply.txt'), (err) => {
      if (err) throw err;
      console.log('Rename completed.');
    })

  })

})

// exit on uncaight errors
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})