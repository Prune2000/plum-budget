import React from 'react';
import { connect } from 'react-redux';
import { changeMonth } from '../../actions/month';

class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        month: 'January',
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
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
          </select>
          <button type="submit" className="add__btn">Submit</button>
        </form>
      </div>
        
    );
  }
};

export default connect()(SelectDate);