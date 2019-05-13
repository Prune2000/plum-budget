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
        <div>
          <UserInfo />
        </div>

        <YearlyBudget />
        <div>
          <p>Select a new month: </p>
          <SelectDate />
        </div>

      </Menu>
    );
  }
}

export default connect()(MenuSide);