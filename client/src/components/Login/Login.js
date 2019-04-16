import React from 'react';
 
export default class Login extends React.Component {

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