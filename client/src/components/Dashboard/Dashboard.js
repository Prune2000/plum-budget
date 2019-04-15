import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import IncomeList from '../IncomeList/IncomeList';
import ExpenseList from '../ExpenseList/ExpenseList';
import AddBudget from '../AddBudget/AddBudget';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      incomes: [],
      expenses: [] 
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        
          <AddBudget />

          <div className="container clearfix">
            <div className="income">
              <h2 className="income__title">Incomes</h2>
                              
              <IncomeList />

            </div>
          

            <div className="expenses">
              <h2 className="expenses__title">Expenses</h2>

              <ExpenseList />
            
            </div>
          </div>
      </div>
      
    );
  }
}

export default Dashboard;