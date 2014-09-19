var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/startupslam');

// user model
var User = mongoose.model('User', { email: String });

var app = express();

// add middleware
app.use(serveStatic('./static'));
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/submit', function (req, res) {

    // get the email from the request body
    var email = req.body.email;
    console.log(req.body);

    // create a new User object
    var user = new User({ email: email });

    // Save the user
    user.save(function (err) {
        if (err) { console.error('Failed:', err); }
        else { console.log('New User!', email); }
    });

    // respond to the request
    res.send('success');
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('started on port', port);
