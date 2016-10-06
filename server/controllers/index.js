var express = require('express'),
	router = express.Router();

router.use('/api/books', require('./BookController'));

module.exports = router;