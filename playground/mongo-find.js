const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');

	//find() returns MongoDB cursor. This cursor is not actual documents themselves. It's actually a pointer to those documents & the cursor has tons of methods, we can use those methods to get our documents
	//
	// db.collection('Todos').find({
	// 	// id: 589703dfe4c8de1b7cbc9e39 // won't work because what we have inside the _id property isn't a string, its an Object ID.
	// 	_id: new ObjectID('589701273aa43a22ccfc13ff')
	// }).toArray().then((docs) => { // toArray() is also a MongoDB cursor
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos',err);
	// });
	
	// http://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html#count
	//  will display the documents with the specific ID.
	//  here count() gets the count of documents for this cursor

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