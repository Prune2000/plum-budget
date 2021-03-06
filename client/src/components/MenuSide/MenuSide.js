import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { slide as Menu } from 'react-burger-menu';

import YearlyBudget from '../YearlyBudget/YearlyBudget';
import UserInfo from '../UserInfo/UserInfo';
import SelectMonth from '../SelectDate/SelectMonth';
import SelectYear from '../SelectDate/SelectYear';

class MenuSide extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    axios.get('/auth/logout').then(response => {
      window.location = response.request.responseURL; // Redirect to homepage if logout was successful
    });
  }

  render () {
    return (
      <Menu>
        <div className="sidemenu_container-user">
          <UserInfo />
        </div>

        <div className="sidemenu_container-logout">
          <button onClick={this.onClick} className="btn-logout">Logout</button>
        </div>

        <div className="sidemenu_container">
          <YearlyBudget />
        </div>
        
        <div className="sidemenu_container">
          <SelectMonth />
        </div>

        <div className="sidemenu_container">
          <SelectYear />
        </div>

      </Menu>
    );
  }
}

export default connect()(MenuSide);