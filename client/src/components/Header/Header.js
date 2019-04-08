import React, { Component } from 'react';
import './Header.css';
import IncomeTotal from '../IncomeTotal/IncomeTotal';
import ExpenseTotal from '../ExpenseTotal/ExpenseTotal';

class Header extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {

      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let date = new Date();
      let month = months[date.getMonth() - 1];

      return (
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{month}</span>:
                </div>
                
                <div className="budget__value">+ 2,345.64</div>
                
                <IncomeTotal />
                
                <ExpenseTotal />
            </div>
        </div>
      );
    }
  };

  export default Header;