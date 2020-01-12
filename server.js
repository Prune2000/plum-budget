const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const session = require('express-session');
const path = require('path');

const config = require('./config');
const phraseSession = require('./config/session');

const port = process.env.PORT || 5000;

app.use('/src', express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cookieParser(phraseSession.hoy));


// required for passport
app.use(session({ 
  secret: phraseSession.hey,
  name: 'Plum_cookie',
  proxy: true,
  resave: false,
  saveUninitialized: false 
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

mongoose.connect(config.getDbConnectionString());
require('./controllers/auth/authController')(app, passport);
require('./controllers/api/apiController')(app, passport);
//apiController(app, passport);


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '/client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });
}


app.listen(port, () => console.log(`Listening on port ${port}`));



