import React from 'react';
import { connect } from 'react-redux';
import Income from '../Income/Income';
 
const IncomeList = (props) => (
    <div className="income__list">
        {props.incomes.map(income => (
            <div className="item clearfix" key={income._id}> 
                <Income {...income} />
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
