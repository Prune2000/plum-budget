import React from 'react';
import { connect } from 'react-redux';
import './IncomeTotal.css';

const IncomeTotal = (props) => (

    <div className="budget__income clearfix">
        <div className="budget__income--text">Income</div>
        <div className="right">
            <div className="budget__income--value">{props.total}</div>
            <ion-icon name="trash"></ion-icon>
        </div>
    </div> 
);

const mapStateToProps = (state) => {

    let arr = state.month;

    // Calculate the total incomes for the selected month
    let incomePerMonth = state.income.filter(income => income.month === state.month[arr.length - 1].month);
    let incomeArray = [];
    incomePerMonth.map(income => {
        return incomeArray.push(Number(income.price)); // the prices are stored as strings so need to convert them
    });
    const arrSum = arr => arr.reduce((a,b) => a + b, 0);
    let incomeTotal = arrSum(incomeArray);

    // Format the total income
    const formatNumber = num => {

        let numSplit, int, dec;

        num = Math.abs(num);
        num = num.toFixed(2); // always put 2 decimals and also rounds it. Ex: 2000 becomes 2000.00, 46.4589 becomes 46.46
        numSplit = num.split('.');
        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); // input 2310, output 2,310
        }
        dec = numSplit[1];
        return '+ ' + int + '.' + dec;  
    };

    return {
        incomes: state.income,
        total: formatNumber(incomeTotal)
    };

}
 
export default connect(mapStateToProps)(IncomeTotal);