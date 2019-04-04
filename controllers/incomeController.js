const Incomes = require('../models/incomeModel');
const bodyParser = require('body-parser');

module.exports = app => {

    app.post('/api/database', (req, res) => {
        let newIncome = Incomes({
            type: req.body.type,
            description: req.body.description,
            price: req.body.price
        });
        newIncome.save(err => {
            if (err) throw err;
            res.send('Success');
        });
    });
}