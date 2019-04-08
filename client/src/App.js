import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import IncomeList from './components/IncomeList/IncomeList';



class App extends Component {
  constructor() {
    super();
    this.state = { 
      incomes: [],
      expenses: [] 
    };
  }

  async componentDidMount() {
    

    const responseExpense = await fetch('/api/expenses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const bodyExpense = await responseExpense.json();
    this.setState({ expenses: bodyExpense });
  }

  render() {
    return (
      <div className="App">
        <Header />
        
          <Form />

          <div className="container clearfix">
            <div className="income">
              <h2 className="income__title">Incomes</h2>
                              
              <IncomeList />

            </div>
          

          <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            
            <div className="expenses__list">
            
              {this.state.expenses.map(el => (
                
                <div className="item clearfix" id={el._id}> 
                <div className="item__description">{el.description}</div> 
                <div className="right clearfix"> 
                  <div className="item__value">{el.price}</div> 
                  <div className="item__delete"> 
                    <button className="item__delete--btn">
                    <i className="ion-ios-close-outline"></i></button> 
                  </div> 
                </div> 
              </div>
              ))}
            
            </div>
          </div>
        </div>
            
  
      </div>
    );
  }
}

export default App;