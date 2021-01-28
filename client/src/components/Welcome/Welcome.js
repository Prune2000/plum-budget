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
            <img src={require('./plum2.png')} alt="family in orchard" />  
            <p>Plum Budget is an open-source, secure and confidential budget app. No data sold, no 3rd parties, no ads. Create an account and start tracking your spendings now!</p>
            <a href="https://github.com/Prune2000/plum-budget" target="_blank" rel="noopener noreferrer"><img src={require('./github-logo-white.png')} alt="github logo" id="github"/></a>
          </div>

        </div>

      </div>
      
    );
  }
}

export default connect()(Welcome);