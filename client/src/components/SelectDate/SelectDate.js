import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import { changeMonth } from '../../actions/filters';

class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        month: '',
      }
  }

  onMonthChange(e) {
    const month = e.target.value;
    this.setState(() => ({ month: month }));
  } 

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(changeMonth(this.state.month));
  }
    
  render() {
    return (
      
      <div className="add__container">
        <form className="add__form" onSubmit={this.onSubmit}>
          <select className="add__type" name="month" onChange={this.onMonthChange}>
              <option value="March">March</option>
              <option value="April">April</option>
          </select>
          <button type="submit" className="add__btn">Submit</button>
        </form>
      </div>
        
    );
  }
};

export default connect()(SelectDate);