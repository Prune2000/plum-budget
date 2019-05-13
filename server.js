const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const session = require('express-session')

const config = require('./config');
const phraseSession = require('./config/session');

const port = process.env.PORT || 5000;

//app.use('/src', express.static(__dirname + '/client'));
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
app.use( (req, res, next) => { // Just here to log the req.session to see what’s going on
  console.log('req.session', req.session);
  return next();
});

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

mongoose.connect(config.getDbConnectionString());
require('./controllers/auth/authController')(app, passport);
require('./controllers/api/apiController')(app, passport);
//apiController(app, passport);


app.listen(port, () => console.log(`Listening on port ${port}`));



