import React, { Component } from 'react';
import './Expense.css';

class Expense extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
                <div className="budget__expenses--value">- 1,954.36</div>
                <div className="budget__expenses--percentage">45%</div>
            </div>
        </div>   
        );
    }
};

export default Expense;