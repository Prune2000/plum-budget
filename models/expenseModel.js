const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    userID: String,
    username: String,
    type: String,
    description: String,
    price: String
});

const Expenses = mongoose.model('Expenses', ExpenseSchema);

module.exports = Expenses;