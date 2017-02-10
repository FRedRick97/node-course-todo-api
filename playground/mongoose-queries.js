const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');

const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id1 = '589da417456dd42484b3aa9b';
var id2 = '589b55fd60f5530b902e4dd9s';

if(!ObjectID.isValid(id1)) {
	console.log('ID not valid');
}

Todo.find({
	_id: id1 /*we pass in string as a value, mongoose is gonna convert this string into an object ID.*/
}).then((todo) => {
	console.log('Todo', todo);
});
/*findOne returns one document at most*/
Todo.findOne({
	_id: id1
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id1).then((todo) => {
	if(!todo) {
		return console.log('Id not found');
	}
	console.log('Todo', todo);
}).catch((e) => console.log(e));

User.findById(id2).then((user) => {
	if(!user) {
		return console.log('Id not found');
	}
	console.log('User', user);
}).catch((e) => console.log(e));