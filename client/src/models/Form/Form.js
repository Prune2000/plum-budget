import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
    }

    handleSubmit = async() => {
      const response = await fetch('/api/database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.),
      });
      const body = await response.text();
      this.setState({ responseToPost: body });
    };

    render() {
      return (
        <div className="bottom">
            <div className="add">
                <div className="add__container">
                  <form onSubmit={this.handleSubmit} method="post">
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