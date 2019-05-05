import React from 'react';
import { connect } from 'react-redux';


class Welcome extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="top__welcome">
          <div className="top__menu">
            <ul>
              <li>
                <a href="/signup">Sign-up</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>

          <div className="top__logo">
            <img src={require('./plum2.png')} />  
            <p>Plum Budget is a secure and confidential budget app. No tracking, no 3rd parties, no ads. Create an account and start tracking your spending now!</p>
          </div>

        </div>
        <div>
          <p>Plum Budget is a secure and confidential budget app. Too many budget apps will sell financial information to 3rd parties as well as track users to get better insights on their shopping habits. This app aims to give a free and confidential app to track your daily finances.

          Plum budget is an open-source project, so feel free to help! Contact me on twitter or by email if you need help!</p>
        </div>
      </div>
      
    );
  }
}

export default connect()(Welcome);