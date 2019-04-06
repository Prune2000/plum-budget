import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
    }

    state = {
      response: '',
  
      type: 'inc',
      description: '',
      price: '',
      
      responseToPost: '',
    };

    handleSubmit = async e => {
      e.preventDefault();
      const response = await fetch('/api/database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          type: this.state.type,
          description: this.state.description,
          price: this.state.price
         }),
      });
      const body = await response.text();
      this.setState({ responseToPost: body });
    };

    render() {
      return (
        <div className="bottom">
            <div className="add">
                <div className="add__container">
                  <form onSubmit={this.handleSubmit}>
                    <select className="add__type" name="type" onChange={e => this.setState({ type: e.target.value })}>
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input 
                      type="text" 
                      className="add__description" 
                      placeholder="Add description"
                      name="description" 
                      onChange={e => this.setState({ description: e.target.value })}
                    />
                    <input 
                      type="number" 
                      className="add__value" 
                      placeholder="Value" 
                      name="price"
                      onChange={e => this.setState({ price: e.target.value })}
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