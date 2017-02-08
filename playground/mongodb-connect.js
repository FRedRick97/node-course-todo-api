// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var  obj = new ObjectID();
console.log(obj);

var user = {name: 'Kyle', age: 25};

var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({ /*lets us insert new document to our collection, takes 2 arguments, first is an object that stores various key value pairs, 2nd is callback*/
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	db.collection('User').insertOne({
		name: 'Anderson',
		age: 24,
		location: 'California'
	}, (err, result) => {
		if(err) {
			return console.log('Unable to insert todo', err);
		}

		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	});
	db.close();
});