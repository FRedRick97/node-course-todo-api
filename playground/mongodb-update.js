const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//findOneAndUpdate(filter, update, options, callback) 
	// http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
	
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("589701273aa43a22ccfc13ff")
	// }, {
	// 	$set: { 
	// 		/*it is an update cmd, for more info ->*/
	// 		/**http://docs.mongodb.com/manual/reference/operator/update**/
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false // returnOriginal by default is true, it returns the original document instead of the updated one.
	// }).then((result) => {
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });
	
	db.collection('User').findOneAndUpdate({
		_id: new ObjectID("589af841f89b49c123f881e9")
	}, {
		$set: {
			name: 'Sam'
		}, 
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
});