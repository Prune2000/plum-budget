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
    let monthArr = state.month;
    let yearArr = state.year;

    console.log(yearArr)
    return {
        expenses: state.expense.filter(expense => expense.month === state.month[monthArr.length - 1].month),
        month: state.month[monthArr.length - 1].month
    };
}

 
export default connect(mapStateToProps)(ExpenseList);