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
    console.log(state);
    return {
        expenses: state.expense
    };
}
 
export default connect(mapStateToProps)(ExpenseList);