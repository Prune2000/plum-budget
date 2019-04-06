
const Incomes = require('../models/incomeModel');
const Expenses = require('../models/expenseModel');
const bodyParser = require('body-parser');

module.exports = app => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/incomes', (req, res) => {
        Incomes.find({ type: 'inc'}, (err, incomes) => {
            if (err) throw err;
            res.send(incomes);
        });
    });

    app.get('/api/expenses', (req, res) => {
        Incomes.find({ type: 'exp'}, (err, expenses) => {
            if (err) throw err;
            res.send(expenses);
        });
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
    });
}
