require('dotenv').config();
const express = require('express');
const cors = require('cors');

// create express app
const app = express();
app.use(cors());

// listen for requests
var port = process.env.PORT || 8080;

var host = process.env.HOST || '0.0.0.0';

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});