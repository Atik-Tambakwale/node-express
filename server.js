const express = require('express');
//create top level function by express function exported by express module
const app = express();

//create express web server

//basc routes
app.get('/', (req, res) => {
	res.send('app is ready!')
});

app.get('/login', (req, res) => {
	res.send(`<form action="">
	<h1>Login</h1>
	<input type="text" placeholder="username">
	<br>
	<input type="password" name="" id="" placeholder="password">
	<br>
	<button>login</button>
</form>`)
})

//listen port 
let port = 5000;
app.listen(port, (err) => {
	if (err) throw err;
	console.log('express server is running on port number' + port);
});