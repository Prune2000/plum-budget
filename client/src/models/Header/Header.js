import React, { Component } from 'react';
import './Header.css';

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
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">+ 4,300.00</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- 1,954.36</div>
                        <div className="budget__expenses--percentage">45%</div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  };

  export default Header;