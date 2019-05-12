import React from 'react';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import YearlyBudget from '../YearlyBudget/YearlyBudget';
import UserInfo from '../UserInfo/UserInfo';

class MenuSide extends React.Component {

  render () {
    return (
      <Menu>
        <UserInfo />
        <YearlyBudget />
      </Menu>
    );
  }
}

export default connect()(MenuSide);