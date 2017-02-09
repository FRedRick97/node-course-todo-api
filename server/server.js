var express = require('express');
var bodyParser = require('body-parser'); // take your json & convert it into an object

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json()); // takes your JSON and convert it into object, attaching it onto request.

app.post('/todos', (req, res) => {
	// console.log(req.body);
	var todo = new Todo({
		text: req.body.text // bodyParser
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e); // http://httpstatues.com
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});
