import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import IncomeList from './components/IncomeList/IncomeList';
import ExpenseList from './components/ExpenseList/ExpenseList';
import AddBudget from './components/AddBudget/AddBudget';



class App extends Component {
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

export default App;