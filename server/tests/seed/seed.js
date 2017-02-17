const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo.js');
const {User} = require('./../../models/user.js');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
	_id: userOneId,
	email: 'abc@example.com',
	password: 'userOnePass',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
	}]
}, {
	_id: userTwoId,
	email: 'sam@example.com',
	password: 'userTwoPass'
}];

const todos = [{
  _id: new ObjectID(),
  text: "Hello World...!!!",
  completed: false
}, {
  _id: new ObjectID(),
  text: "Minecraft",
  completed: false
}];

const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();
		/**https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all**/
		return Promise.all([userOne, userTwo]);
	}).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};