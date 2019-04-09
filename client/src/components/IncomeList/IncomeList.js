import React from 'react';
import { connect } from 'react-redux';
 
const IncomeList = (props) => (
    console.log(props.incomes),
    <div className="income__list">
        {props.incomes.map(income => (
            <div className="item clearfix" id={income._id}> 
            <div className="item__description">{income.description}</div> 
            <div className="right clearfix"> 
                <div className="item__value">{income.price}</div> 
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
        incomes: state.income
    };
}
 
export default connect(mapStateToProps)(IncomeList);
