import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {

    render() {
        return (
            <div>
                <form action="/login" method="post" className='add-user-form'>
 
                    <input type="text" name="username" placeholder="Username" autoFocus required/>
                    <br />
 
                    <input type="password" name="password" placeholder="password" required />
                    <br />
 
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

  
export default connect()(Login);