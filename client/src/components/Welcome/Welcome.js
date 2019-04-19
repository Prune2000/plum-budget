import React from 'react';
import { connect } from 'react-redux';
import Register from '../Register/Register';
import Login from '../Login/Login';


class Welcome extends React.Component {


  render() {
    return (
      <div className="App">

        <div className="top">
          <Register />
        </div>

      <div>
        <Login />
      </div>

      </div>
      
    );
  }
}

export default connect()(Welcome);