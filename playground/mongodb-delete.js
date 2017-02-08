const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');

	//deleteMany -> It will let us target many documents and remove them.
	// db.collection('Todos').deleteMany({text: 'Minecraft'}).then((result) => {
	// 	console.log(result);
	// });

	// // deleteOne -> works similar to deleteMany but deletes the first one found only
	// db.collection('Todos').deleteOne({text: 'Minecraft'}).then((result) => {
	// 	console.log(result);
	// });

	// // findOneAndDelete -> deletes the 1st target it sees, great for working with _id
	
	// db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('User').deleteMany({name: 'Anderson'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('User').findOneAndDelete({
		_id: new ObjectID('589703dfe4c8de1b7cbc9e39')
	}).then((result) => {
		console.log(JSON.stringify(result, undefined,2));
	});
});