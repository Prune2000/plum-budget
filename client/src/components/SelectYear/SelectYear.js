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
        year: "2010",
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
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
          </select>
          <button type="submit" className="add__btn">Select</button>
        </form>
      </div>
        
    );
  }
};

export default connect()(SelectYear);