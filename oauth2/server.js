var path = require('path');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 80);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send('Welcome to home page.');
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});