import React from 'react';
import LoginForm from '../LoginForm/LoginForm';


class Login extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="top">
          <LoginForm />
        </div>
      </div>
      
    );
  }
}

export default Login;