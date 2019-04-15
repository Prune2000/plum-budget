import React from 'react';
import Register from '../Register/Register';

class Welcome extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="top">
          <Register />
        </div>

      </div>
      
    );
  }
}

export default Welcome;