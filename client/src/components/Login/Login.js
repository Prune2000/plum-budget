import React from 'react';
 
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
 
        this.state = {
            username: '',
            password: '',
 
            error: ''
        };
    }
 
    onUsernameChange(e) {
        const username = e.target.value;
        this.setState(() => ({ username: username }));
    }
 
    onPasswordChange(e) {
        const password = e.target.value;
        this.setState(() => ({ password: password }));
    }
 
    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form action="/login" method="POST" className='add-user-form'>
 
                    <input type="text" placeholder="Username" autoFocus
                        value={this.state.username}
                        onChange={this.onUsernameChange} />
                    <br />
 
                    <input type="password" placeholder="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange} />
                    <br />
 
                    <button>Login</button>
                </form>
            </div>
        );
    }
}