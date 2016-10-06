var uri = 'mongodb://localhost:27017/MongoDB'

var mongoose = require('mongoose');
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', function (callback) {
	console.log('db connected');
});




