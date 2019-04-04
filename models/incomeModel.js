const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    type: String,
    description: String,
    price: String
});

const Incomes = mongoose.model('Incomes', incomeSchema);

module.exports = Incomes;