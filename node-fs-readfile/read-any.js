const fs = require('fs');
var myArgs = process.argv.slice(2);

if (myArgs[0] === 'cunningham.txt') {
  fs.readFile('cunningham.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} else if (myArgs[0] === 'dijkstra.txt') {
  fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} else if (myArgs[0] === 'hipster-ipsum.txt') {
  fs.readFile('hipster-ipsum.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} else if (myArgs[0] === 'hopper.txt') {
  fs.readFile('hopper.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
