import React from 'react';
import { connect } from 'react-redux';


const YearlyBudget = (props) => (
          <div className="budget__year">
              <div className="budget__title">
                  <p>Your total budget in <span className="budget__title--month">{props.year}</span>:</p>
              </div>
              
              <div className="budget__value">{props.total}</div>
          </div>
      );

const mapStateToProps = (state) => {

    let date = new Date();
    
    let year = date.getFullYear();  

  // Calculate the total expenses for the year
  let expensePerMonth = state.expense.filter(expense => Number(expense.year) === year);
  let expenseArray = [];
  expensePerMonth.map(expense => {
      return expenseArray.push(Number(expense.price)); // the prices are stored as strings so need to convert them
  });
  const arrSum = arr => arr.reduce((a,b) => a + b, 0);
  let expenseTotal = arrSum(expenseArray);

  // Calculate the total incomes for the selected month
  let incomePerMonth = state.income.filter(income => Number(income.year) === year);
  let incomeArray = [];
  incomePerMonth.map(income => {
      return incomeArray.push(Number(income.price)); // the prices are stored as strings so need to convert them
  });
  let incomeTotal = arrSum(incomeArray);

  // Calculate the complete total
  let budgetTotal = (incomeTotal - expenseTotal);
  const calcType = (budget) => {
    if (budget >= 0) {
      let type = 'inc';
      return type;
    } else {
      let type = 'exp';
      return type;
    }
  };


  // Format the total
  const formatNumber = (num, type) => {

      let numSplit, int, dec;

      num = Math.abs(num);
      num = num.toFixed(2); // always put 2 decimals and also rounds it. Ex: 2000 becomes 2000.00, 46.4589 becomes 46.46
      numSplit = num.split('.');
      int = numSplit[0];
      if (int.length > 3) {
          int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); // input 2310, output 2,310
      }
      dec = numSplit[1];
      return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;  
  };

  return {
    year: year,
    total: formatNumber(budgetTotal, calcType(budgetTotal)),
    user: state.user
  };
}
     
export default connect(mapStateToProps)(YearlyBudget);