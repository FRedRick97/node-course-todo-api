const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');

	// db.collection('Todos').find({
	// 	// id: 589703dfe4c8de1b7cbc9e39 // won't work because what we have inside the _id property isn't a string, its an Object ID.
	// 	_id: new ObjectID('589701273aa43a22ccfc13ff')
	// }).toArray().then((docs) => { // toArray() is also a MongoDB cursor
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos',err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos',err);
	// });
	
	db.collection('User').find({name: 'David'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) => {
		console.log('Unable to fetch todos',err);
	});
	
});