var _ = require('lodash');
var expressWinston = require('express-winston');
var buildOptions = require('./buildOptions');

function loopbackLogger(options) {
	options = buildOptions(options);

	options.skip = function (req, res) {
		return res.statusCode >= 500;
	};

	return expressWinston.logger(options);
}

module.exports = loopbackLogger;