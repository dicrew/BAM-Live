/**
 * Module dependencies.
 */

var connect = require('../lib/connect/lib/connect.js');

var CONFIG = require('../config.js').config;

function app(app) {
	app.get('/api/:method', function (req, res, next) {
	});

	app.put('/api/:method', function (req, res, next) {
	});
};

connect.createServer(
	connect.logger(function (req, res, format) {
		var colors = { 404: 33, 500: 31 }
		  , color = colors[res.statusCode] || 32;
		return format('\033[90m:method :url \033[0m\033[' + color + 'm:status\033[0m');
    }),
	connect.static(__dirname + '/../pub', { maxAge: 0 }),
	connect.cookieParser(),
	connect.bodyParser(),
	connect.router(app),
	connect.errorHandler({ showStack: true, showMessage: true, dumpExceptions: true })
).listen(CONFIG.port);
