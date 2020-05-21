// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(5000);

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "34.82.125.153"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(5000);