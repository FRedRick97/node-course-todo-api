const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove({_id: '589df60192176c0c305d40a7'}).then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove('589df6e592176c0c305d40ac').then((todo) => {
	console.log(todo);
});
