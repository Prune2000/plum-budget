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
    let arr = state.month
    let arr2 = state.year
    console.log(state.year)
    return {
        incomes: state.income.filter(income => income.month === state.month[arr.length - 1].month),
        month: state.month[arr.length - 1].month,
        year: Number(state.year[arr2.length - 1].year)

    };
}
 
export default connect(mapStateToProps)(IncomeList);
