const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const config = require('./config');
const setupController = require('./controllers/setupController');
const Incomes = require('./models/incomeModel');
const Expenses = require('./models/expenseModel');

const port = process.env.PORT || 5000;
//app.use('/src', express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.getDbConnectionString());
setupController(app);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/database', (req, res) => {
  console.log(req.body);
  
  if (req.body.type == 'inc') {
    let newIncome = Incomes({
      type: req.body.type,
      description: req.body.description,
      price: req.body.price
    });
    newIncome.save(err => {
        if (err) throw err;
        res.send('Success - New income registered!');
    });
  }
  else if (req.body.type == 'exp') {
    let newExpense = Expenses({
      type: req.body.type,
      description: req.body.description,
      price: req.body.price
    });
    newExpense.save(err => {
        if (err) throw err;
        res.send('Success - New expense registered!');
    });
  }
  
  //incomeController(req.body);
  
  /*res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );*/
});

app.listen(port, () => console.log(`Listening on port ${port}`));