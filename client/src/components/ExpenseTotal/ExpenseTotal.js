import React from 'react';
import { connect } from 'react-redux';
import './ExpenseTotal.css';

const ExpenseTotal = (props) => (

    <div className="budget__expenses clearfix">
        <div className="budget__expenses--text">Expenses</div>
        <div className="right clearfix">
            <div className="budget__expenses--value">{props.total}</div>
            <div className="budget__expenses--percentage">{props.percentage}</div>
        </div>
    </div>
);

const mapStateToProps = (state) => {

    // Calculate the budget for all the expenses
    let expenseArray = [];
    state.expense.map(expense => {
        return expenseArray.push(Number(expense.price)); // the prices are stored as strings
    });
    const arrSum = arr => arr.reduce((a,b) => a + b, 0);
    let expenseTotal = arrSum(expenseArray);

    // Calculate the total incomes
    let incomeArray = [];
    state.income.map(income => {
        return incomeArray.push(Number(income.price)); // the prices are stored as strings
    });
    let incomeTotal = arrSum(incomeArray);

    // Calculate the complete total
    let budgetTotal = (incomeTotal - expenseTotal);
    const calcType = (budget) => {
        let type;
        if (budget >= 0) {
            return type = 'inc'
        } else {
            return type = 'exp'
        }
    };

    // Calculate the percentage of expenses
    const calcPercentage = (inc, exp) => {
        if (inc > 0 && inc > exp) {
            let percentageTotal;
            return percentageTotal = `${Math.round((exp / inc) * 100)}%`
        };
    }
    

    // Format the total
    const formatNumber = (num, type) => {

        let numSplit, int, dec, sign;

        num = Math.abs(num);
        num = num.toFixed(2); // always put 2 decimals and also rounds it. Ex: 2000 becomes 2000.00, 46.4589 becomes 46.46
        numSplit = num.split('.');
        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); // input 2310, output 2,310
        }
        dec = numSplit[1];
        return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;  
    };

    return {
        expenses: state.expense,
        total: formatNumber(expenseTotal, 'exp'),
        percentage: calcPercentage(incomeTotal, expenseTotal)
    };
}
 
export default connect(mapStateToProps)(ExpenseTotal);

