import React from 'react';
import SignupForm from '../SignupForm/SignupForm';


class Signup extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="top">
          <SignupForm />
        </div>
      </div>
      
    );
  }
}

export default Signup;