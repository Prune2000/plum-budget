import React from 'react';
import { connect } from 'react-redux';
import { changeYear } from '../../actions/year';


class SelectYear extends React.Component {
  constructor(props) {
    super(props);
    this.onYearChange = this.onYearChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    const old_year = ((new Date()).getFullYear()) - 10;
    this.years = Array.from(new Array(20),(val, index) => index + old_year);
    let current_year = new Date().getFullYear();

    this.state = {
        year: current_year,
      }
  }

  onYearChange(e) {
    const year = e.target.value;
    this.setState(() => ({ year: year }));
  } 

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(changeYear(this.state.year));
  }
    
  render() {
    return (
      
      <div className="add__container">
        <p>Select another year: </p>
        <form className="add__form" onSubmit={this.onSubmit}>
          <select className="change__date" name="year" onChange={this.onYearChange}>
            {
              this.years.map((year, index) => {
                return <option key={`year${index}`} value={year}>{year}</option>
              })
            }
          </select>
          <button type="submit" className="add__btn">Select</button>
        </form>
      </div>
        
    );
  }
};

export default connect()(SelectYear);