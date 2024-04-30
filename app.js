const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hiii,I am trying to deploy nodejs application..This is my first project..! and I have done it...'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
