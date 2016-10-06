var express = require('express'),
	router = express.Router(),
	Book = require('../models/book').Book;

router.get('/', function(req, res) {
	Book.find({}, function(err, books) {
		res.json(books);
	});
});

router.get('/:book', function(req, res) {
	res.send('trying to get book');
});

module.exports = router