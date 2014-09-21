var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

var app = express();

// add middleware
app.use(serveStatic('./static'));
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/submit', function (req, res) {

    // get the email from the request body
    var email = req.body.email;

    console.log('New user!', email);

    // respond to the request
    res.send('success');
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('started on port', port);
