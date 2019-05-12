import React from 'react';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import YearlyBudget from '../YearlyBudget/YearlyBudget';
import UserInfo from '../UserInfo/UserInfo';

class MenuSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: this.props.username,
        }
    }

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <UserInfo />
        <YearlyBudget />
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {

    console.log(state.user.username);

    return {
      username: state.user.username
    };
  }

export default connect(mapStateToProps)(MenuSide);