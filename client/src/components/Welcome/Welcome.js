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
            <p>Plum Budget is a secure and confidential budget app. No data sold, no 3rd parties, no ads. Create an account and start tracking your spending now!</p>
          </div>

        </div>

      </div>
      
    );
  }
}

export default connect()(Welcome);