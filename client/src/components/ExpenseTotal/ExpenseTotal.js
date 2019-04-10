import React from 'react';
import { connect } from 'react-redux';
import './ExpenseTotal.css';

const ExpenseTotal = (props) => (

    <div className="budget__expenses clearfix">
        <div className="budget__expenses--text">Expenses</div>
        <div className="right clearfix">
            <div className="budget__expenses--value">- {props.total}</div>
            <div className="budget__expenses--percentage">45%</div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    let priceArray = [];
    state.expense.map(expense => {
        return priceArray.push(Number(expense.price)); // the prices are stored as strings
    });
    const arrSum = arr => arr.reduce((a,b) => a + b, 0);
    let priceTotal = arrSum(priceArray);
    
    console.log(priceArray);
    return {
        expenses: state.expense,
        total: priceTotal
    };
}
 
export default connect(mapStateToProps)(ExpenseTotal);

