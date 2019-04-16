const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('connect-flash');
const expressSession = require('express-session');
const morgan = require('morgan');

const config = require('./config');
const phraseSession = require('./config/session');
const apiController = require('./controllers/apiController');

const port = process.env.PORT || 5000;

//app.use('/src', express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cookieParser(phraseSession.hoy));


// required for passport
app.use(expressSession({ 
  secret: phraseSession.hey,
  name: 'Plum_cookie',
  proxy: true,
  resave: true,
  saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

mongoose.connect(config.getDbConnectionString());
require('./controllers/apiController')(app, passport);
//apiController(app, passport);


app.listen(port, () => console.log(`Listening on port ${port}`));



