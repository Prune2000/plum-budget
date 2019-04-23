import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import IncomeTotal from '../IncomeTotal/IncomeTotal';
import ExpenseTotal from '../ExpenseTotal/ExpenseTotal';


const Header = (props) => (
        <div className="top">
          <div className="user-info">
            <p>{props.user.username}</p>
          </div>

          <div className="budget">
              <div className="budget__title">
                  Available Budget in <span className="budget__title--month">Prout</span>:
              </div>
              
              <div className="budget__value">{props.total}</div>
              
              <IncomeTotal />
              
              <ExpenseTotal />
          </div>
        </div>
      );

const mapStateToProps = (state) => {

  // Calculate the total expenses
  let expenseArray = [];
  state.expense.map(expense => {
      return expenseArray.push(Number(expense.price)); // the prices are stored as strings
  });
  const arrSum = arr => arr.reduce((a,b) => a + b, 0);
  let expenseTotal = arrSum(expenseArray);

  // Calculate the total incomes
  let incomeArray = [];
  state.income.map(income => {
      return incomeArray.push(Number(income.price)); // the prices are stored as strings
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
  console.log(state.filter);

  return {
    month: state.filter[0].month,
    total: formatNumber(budgetTotal, calcType(budgetTotal)),
    user: state.user
  };
}
     
export default connect(mapStateToProps)(Header);
