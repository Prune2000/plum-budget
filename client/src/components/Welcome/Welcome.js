import React from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import Signup from '../Register/Signup';


class Welcome extends React.Component {


  render() {
    return (
      <div className="App">

        <div className="top">
          <Signup />
        </div>

        <div>
          <Login />
        </div>

      </div>
      
    );
  }
}

export default connect()(Welcome);