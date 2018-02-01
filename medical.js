var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout : 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));	

var information = require('./lib/information.js');
var aboutinfo = require('./lib/about.js');					
app.get('', function(req, res)
{
	var randominfo = information[Math.floor(Math.random()*information.length)];
	res.render('home',{ information: information.getInformation() });
});
app.get('/about', function(req, res)
{
	var randomabout = aboutinfo[Math.floor(Math.random()*aboutinfo.length)];
	res.render('about',{ aboutinfo: aboutinfo.getAbout() });
});
app.use(function(req, res, next)
{
	res.status(404);
	res.render('error');
});
app.use(function(err, req, res, next)
{
	console.error(err.stack);
	res.status(500);
	res.render('server_error');
});
app.listen(app.get('port'),()=>
{
	console.log('Server started on :'+app.get('port')+' press Ctrl+c to terminate');
});