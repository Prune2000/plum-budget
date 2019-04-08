import React, { Component } from 'react';
import './IncomeTotal.css';

class Income extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
                <div className="budget__income--value">+ 4,300.00</div>
                <div className="budget__income--percentage">&nbsp;</div>
            </div>
        </div>    
        );
    }
};

export default Income;