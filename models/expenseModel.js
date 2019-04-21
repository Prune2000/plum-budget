const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    userID: String,
    year: String,
    month: String,
    type: String,
    description: String,
    price: String
});

const Expenses = mongoose.model('Expenses', ExpenseSchema);

module.exports = Expenses;