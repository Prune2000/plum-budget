import React, { Component } from 'react';
import './Header.css';
import Income from '../Income/Income';
import Expense from '../Expense/Expense';

class Header extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">%Month%</span>:
                </div>
                
                <div className="budget__value">+ 2,345.64</div>
                
                <Income />
                
                <Expense />
            </div>
        </div>
      );
    }
  };

  export default Header;