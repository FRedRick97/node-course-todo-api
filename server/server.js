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

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		// res.send(todos);
		res.send({todos}); // flexible to create an object and send, this helps to add more things inside object incase we need to
	}, (e) => {
		res.send(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {app};