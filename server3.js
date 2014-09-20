var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');

// mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/startupslam');
mongoose.connect('mongodb://localhost/startupslam');

// user model
var Signup = mongoose.model('Signup', { email: String });

var app = express();

// add middleware
app.use(serveStatic('./static'));
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/submit', function (req, res) {

    // get the email from the request body
    var email = req.body.email;

    // create a new User object
    var signup = new Signup({ email: email });

    // Save the user
    signup.save();

    // respond to the request
    res.send('success');
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('started on port', port);
