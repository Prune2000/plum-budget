const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const config = require('./config');
const apiController = require('./controllers/apiController');

const port = process.env.PORT || 5000;
//app.use('/src', express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.getDbConnectionString());
apiController(app);


app.listen(port, () => console.log(`Listening on port ${port}`));