var express = require('express'),
	app = express(),
 	bodyParser = require('body-parser'),
 	cors = require('cors'),
 	db = require('./db');

app.use(bodyParser.json());
app.use(cors());
app.use(require('./controllers'));

app.listen(3000, function() {});