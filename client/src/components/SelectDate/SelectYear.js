import React from 'react';
import { connect } from 'react-redux';
import { changeYear } from '../../actions/year';

class SelectYear extends React.Component {
  constructor(props) {
    super(props);
    this.onYearChange = this.onYearChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        year: '2021'
      }
  }

  onYearChange(e) {
    const year = e.target.value;
    this.setState(() => ({ year: year }));
  } 

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(changeYear(this.state.Year));
  }
    
  render() {
    return (
      
      <div className="add__container">
        <p>Select another year: </p>
        <form className="add__form" onSubmit={this.onSubmit}>
          <select className="change__date" name="year" onChange={this.onYearChange}>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
          </select>
          <button type="submit" className="add__btn">Select</button>
        </form>
      </div>
        
    );
  }
};

export default connect()(SelectYear);