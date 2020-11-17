const port = 3003;

const bodyParser = require('body-parser'); // responsible for parsing the requisition
const express = require('express'); // web server
const server = express() // creating a instance of express as server
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function() {
    console.log(`Backend is running on port ${port}.`)
});

module.exports = server;