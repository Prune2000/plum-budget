import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="bottom">
            <div className="add">
                <div className="add__container">
                    <select className="add__type">
                        <option value="inc" selected>+</option>
                        <option value="exp">-</option>
                    </select>
                    <input type="text" className="add__description" placeholder="Add description" />
                    <input type="number" className="add__value" placeholder="Value" />
                    <button className="add__btn"><i className="ion-ios-checkmark-outline"></i></button>
                </div>
            </div>
        </div>
      );
    }
  };

  export default Form;