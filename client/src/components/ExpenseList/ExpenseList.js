import React from 'react';
import { connect } from 'react-redux';
import Expense from '../Expense/Expense';
 
const ExpenseList = (props) => (
    <div className="expenses__list">
        {props.expenses.map(expense => (
            <div className="item clearfix" key={expense._id}> 
                <Expense {...expense} />
            </div>
        ))}
    </div>
);
 
const mapStateToProps = (state) => {
    let arr = state.month;
    return {
        expenses: state.expense.filter(expense => expense.month === state.month[arr.length - 1].month),
        month: state.month[arr.length - 1].month,
        year: state.year
    };
}
 
export default connect(mapStateToProps)(ExpenseList);