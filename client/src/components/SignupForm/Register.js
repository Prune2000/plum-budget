import React from 'react';
 
export default class Register extends React.Component {

    render() {
        return (
            <div>
                <form action="/signup" method="POST" className='add-user-form'>
 
                    <input type="text" name="username" placeholder="Username" autoFocus required/>
                    <br />

                    <input type="email" name="email" placeholder="Email" autoFocus required/>
                    <br />
 
                    <input type="password" name="password" placeholder="Password" required />
                    <br />

                    <button>Register</button>
                </form>
            </div>
        );
    }
}