const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('connect-flash');

const config = require('./config');
const session = require('./config/session');
const apiController = require('./controllers/apiController');
const Users = require('./models/userModel');

const port = process.env.PORT || 5000;
//app.use('/src', express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser(session.hoy));
app.use(flash());


app.use(require('express-session')({
    secret: session.hey,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(config.getDbConnectionString());
apiController(app, passport);


app.listen(port, () => console.log(`Listening on port ${port}`));



