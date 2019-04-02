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
                  <form action="/api/database" method="post">
                    <select className="add__type" name="type" >
                        <option value="inc" selected>+</option>
                        <option value="exp" >-</option>
                    </select>
                    <input 
                      type="text" 
                      className="add__description" 
                      placeholder="Add description"
                      name="description" 
                    />
                    <input 
                      type="number" 
                      className="add__value" 
                      placeholder="Value" 
                      name="price"
                    />
                    <button type="submit" className="add__btn">Submit</button>
                  </form>
                </div>
            </div>
        </div>
      );
    }
  };

  export default Form;