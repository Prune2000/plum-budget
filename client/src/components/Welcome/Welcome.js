import React from 'react';
import { connect } from 'react-redux';


class Welcome extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="top">
          <h1>Welcome to Plum Budget!</h1>
        </div>
        <ul>
          <li>
            <a href="/signup">Sign-up</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
      
    );
  }
}

export default connect()(Welcome);