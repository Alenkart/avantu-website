const express = require('express');
const path = require('path');
const app = express();

process.env.PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'client/build')));

//catch any request that is not handle by the api
app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

//start the server
app.listen(process.env.PORT, () => {
	console.log(`Server running on: ${process.env.PORT}`);
});

