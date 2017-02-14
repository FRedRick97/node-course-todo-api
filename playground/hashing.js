const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash); 
// 	});
// });

var hashedPassword = '$2a$10$ykaJQpCfcJnVyV1ZgfRTGOLdAaYS1DyDA7t3yleMkr3g2tTKj4qhG';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});
// var data = {
// 	id: 10
// };
// /*jwt.sign -> takes the object and it signs it i.e it creates hash and then returns token value*/
// /*jwt.verify -> takes token and secret and make sure data wasn't manipulated*/

// var token = jwt.sign(data, '123abc'); /*.sign(object, secret)*/
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// // var message = 'Hello World...!!!';
// // var hash = SHA256(message).toString(); /*converting object to string*/

// // console.log(`Message: ${message}`);
// // console.log(`Hash: ${hash}`);

// // var data = {
// // 	id: 4
// // };
// // var token = {
// // 	data,
// // 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// // };

// // // token.data.id = 5;
// // // token.hash = SHA256(JSON.stringify(token.data)).toString();

// // var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// // if(resultHash === token.hash) {
// // 	console.log('Data was not changed');
// // } else {
// // 	console.log('Data was changed. Do not trust!');
// // }