import React from 'react';
import axios from 'axios';
import './Form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      userID: props.budget ? props.budget.userID: '',
      year: props.budget ? props.budget.year: '',
      month: props.budget ? props.budget.month: '',
      type: props.budget ? props.budget.type: 'inc',
      description: props.budget ? props.budget.description: '',
      price: props.budget ? props.budget.price: '',

      error: ''
    }
  }

  componentDidMount() {
    this.getUser();

    // Add the date to the state
    let date = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let month = months[date.getMonth() - 1];
    this.setState({
      year: date.getFullYear(),
      month: month
    })
  }

  getUser() {
    axios.get('/dashboard').then(res => {
      if (res.data._id) {
        this.setState({
          userID: res.data._id
        });

      } else {
        this.setState({
          userID: ''
        })
      }
    })
  }
  
  onTypeChange(e) {
    const type = e.target.value;
    this.setState(() => ({ type: type }));
  } 
  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description: description }));
  } 
  onPriceChange(e) {
    const price = e.target.value;
    this.setState(() => ({ price: price }));
  }

  onSubmit(e) {
    e.preventDefault();

    // Clear the fields of the form after submission but keeps the current selected type
    const clearFields = () => {
      this.setState.description = '';
      this.setState.price = '';
    }

    if (!this.state.type || !this.state.description || !this.state.price) {
        this.setState(() => ({ error: 'Please set a description and a value!' }));
    } else {
        this.setState(() => ({ error: '' })); // Remove any current error after a success
        this.props.onSubmitBudget(
            {
              userID: this.state.userID,
              year: this.state.year,
              month: this.state.month,
              type: this.state.type,
              description: this.state.description,
              price: this.state.price
            }
        );
        clearFields();
    }
  }
    
  render() {
    return (
      
      <div className="add__container">
        <form className="add__form" onSubmit={this.onSubmit}>
          <select className="add__type" name="type" onChange={this.onTypeChange}>
              <option value="inc">+</option>
              <option value="exp">-</option>
          </select>
          <input 
            type="text" 
            className="add__description" 
            placeholder="Add description"
            name="description"
            value={this.state.description} 
            onChange={this.onDescriptionChange}
          />
          <input 
            type="number" 
            className="add__value" 
            placeholder="Value" 
            name="price"
            value={this.state.price}
            onChange={this.onPriceChange}
          />
          <button type="submit" className="add__btn">Submit</button>
        </form>
        <p>{this.state.error}</p>
      </div>
        
    );
  }
};
