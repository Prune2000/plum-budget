import React from 'react';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import YearlyBudget from '../YearlyBudget/YearlyBudget';
import UserInfo from '../UserInfo/UserInfo';
import SelectDate from '../SelectDate/SelectDate';

class MenuSide extends React.Component {

  render () {
    return (
      <Menu>
        <div className="sidemenu_container">
          <UserInfo />
        </div>

        <div className="sidemenu_container">
          <YearlyBudget />
        </div>
        
        <div className="sidemenu_container">
          <SelectDate />
        </div>

      </Menu>
    );
  }
}

export default connect()(MenuSide);