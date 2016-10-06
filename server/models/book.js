var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
	title 	: String,
    author 	: String,
    description : String,
    price 	: Number,
    pages 	: Number,
    active	: Boolean,
    votes	: Number
});

exports.Book = mongoose.model('Book', BookSchema);


