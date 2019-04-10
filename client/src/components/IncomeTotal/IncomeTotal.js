import React from 'react';
import { connect } from 'react-redux';
import './IncomeTotal.css';

const IncomeTotal = (props) => (

    <div className="budget__income clearfix">
        <div className="budget__income--text">Income</div>
        <div className="right">
            <div className="budget__income--value">+ {props.total}</div>
            <div className="budget__income--percentage">&nbsp;</div>
        </div>
    </div> 
);

const mapStateToProps = (state) => {
    let priceArray = [];
    state.income.map(income => {
        return priceArray.push(Number(income.price)); // the prices are stored as strings
    });
    const arrSum = arr => arr.reduce((a,b) => a + b, 0);
    let priceTotal = arrSum(priceArray);
    
    console.log(priceArray);
    return {
        incomes: state.income,
        total: priceTotal
    };
}
 
export default connect(mapStateToProps)(IncomeTotal);