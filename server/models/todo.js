const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String, /*any type will be converted to string*/
		required: true, /*similar to demand of node, gives error if field empty*/
		minlenght: 1, /*minimum 1 chatacter should be there*/
		trim: true /*trims off any whitespace at the beginning or end of our value*/
	},
	completed: {
		type: Boolean,
		default: false /*default values gets exectued if empty*/
	},
	completedAt: {
		type: Number,
		default: null
	},
	_creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

module.exports = {Todo};