import React from 'react';
import { connect } from 'react-redux';
 
const ExpenseList = (props) => (
    console.log(props.expenses),
    <div className="expenses__list">

        {props.expenses.map(expense => (
            <div className="item clearfix" id={expense._id}> 
            <div className="item__description">{expense.description}</div> 
            <div className="right clearfix"> 
                <div className="item__value">{expense.price}</div> 
                <div className="item__delete"> 
                <button className="item__delete--btn">
                <i className="ion-ios-close-outline"></i></button> 
                </div> 
            </div> 
            </div>
        ))}
    
    </div>
);
 
const mapStateToProps = (state) => {
    return {
        expenses: state.expense
    };
}
 
export default connect(mapStateToProps)(ExpenseList);