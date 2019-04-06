import React, { Component } from 'react';
import './App.css';
import Header from './models/Header/Header';
import Form from './models/Form/Form';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        
          <Form />

          <div class="container clearfix">
            <div class="income">
              <h2 class="income__title">Incomes</h2>
              
              <div class="income__list">
                                          
              </div>

            </div>
          

          <div class="expenses">
            <h2 class="expenses__title">Expenses</h2>
            
            <div class="expenses__list">
                
            </div>
          </div>
        </div>
            
  
      </div>
    );
  }
}

export default App;