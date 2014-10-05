
/**
* Module dependencies.
*/

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var sql = require('./sql.js');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/landing', function(req, res){res.render('landing.ejs');});
app.get('/profile', function(req, res){res.render('profile.ejs');});
app.get('/faq', function(req, res){res.render('faq.ejs');});
app.get('/findRide', function(req, res){res.render('findRide.ejs');});
app.get('/map', function(req, res){res.render('mapPage.ejs')});
app.get('/mapp', function(req, res){res.render('mapMultiple.ejs')});


http.createServer(app).listen(app.get('port'), function(){
console.log('Express server listening on port ' + app.get('port'));
});
