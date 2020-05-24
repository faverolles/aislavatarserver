// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(5000);

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();


// var corsOptions = {
//   origin: 'http://34.82.125.153:5000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }


app.use('*', function (req, res, next) {
//replace localhost:8080 to the ip address:port of your server
    res.header("Access-Control-Allow-Origin", req.ip + ":" + req.port);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


// app.use(cors());
app.options("*", cors());


// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://34.82.125.153:5000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'build')));

app.listen(5000);
