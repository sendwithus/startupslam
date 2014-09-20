var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Party With Us');
});

app.listen(3000);

console.log('started on port 3000');
