const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    description: String,
    value: String
});

const Expenses = mongoose.model('Expenses', ExpenseSchema);

module.exports = Expenses;