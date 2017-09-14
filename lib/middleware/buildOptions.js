var _ = require('lodash');
var app = require('loopback');

function buildOptions(options) {
	options = options || {};

	var base    = {
		type: "express",
		env: process.env.NODE_ENV
	};

	_.defaults(options, {
		winstonInstance:  app.log,
		statusLevels:     true,
		meta:             true,
		baseMeta:         base,
		dumpExceptions:   true,
		showStack:        true,
		msg:              "{{req.baseUrl}}{{req.method}} {{req._parsedUrl.pathname}} {{res.statusCode}} {{res.responseTime}}ms",
		requestWhitelist: ['url', 'headers', 'method', 'httpVersion', 'originalUrl', 'query', '_parsedUrl'],
		ignoreRoute:      function (req, res) {
			return req.url.indexOf('/api') == -1;
		}
	});

	return options;
}

module.exports = buildOptions;