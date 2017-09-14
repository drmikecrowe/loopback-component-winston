var _ = require('lodash');
var expressWinston = require('express-winston');
var buildOptions = require('./buildOptions');

function loopbackLogger(options) {
	options = buildOptions(options);

	return expressWinston.errorLogger(options);
}

module.exports = loopbackLogger;