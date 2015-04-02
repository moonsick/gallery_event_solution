'use strict';

var connect = require('./lib/controllers/dbconnect_v1.01.js');
var c = connect.connection();
var express = require('express');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.on('uncaughtException', function (err) {
  console.log(err);
});

var config = require('./lib/config/config');
// Setup Express
var app = express();
require('./lib/config/express')(app);
require('./lib/routes')(app);
var request = require('request');
// Start server



app.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});


// Expose app
var exports = module.exports = app;



