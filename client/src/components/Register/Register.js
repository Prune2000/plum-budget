import React from 'react';
 
export default class Register extends React.Component {
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

    onSubmit(e) {
        e.preventDefault();
 
        if (!this.state.username || !this.state.password ) {
            this.setState(() => ({ error: 'Please set both username and password' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitUser(
                {
                    username: this.state.username,
                    password: this.state.password
                }
            );
        }
    }
 
    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-user-form'>
 
                    <input type="text" placeholder="Username" autoFocus
                        value={this.state.username}
                        onChange={this.onUsernameChange} />
                    <br />
 
                    <input type="text" placeholder="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange} />
                    <br />
 
                    <button>Register</button>
                </form>
            </div>
        );
    }
}