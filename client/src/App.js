import React, { Component } from 'react';
import './App.css';
import Header from './models/Header/Header';
import Form from './models/Form/Form';



class App extends Component {
  constructor() {
    super();
    this.state = { 
      incomes: [],
      expenses: [] 
    };
  }

  async componentDidMount() {
    const responseIncome = await fetch('/api/incomes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    let bodyIncome = await responseIncome.json();
    this.setState({ incomes: bodyIncome });

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
                              
              <div className="income__list">
                {this.state.incomes.map(el => (
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