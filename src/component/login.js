import React, { Component } from 'react';

import { login } from '../actions/loginAction';

class Login extends Component {
    constructor() {
        super();
        this.auth = this.auth.bind(this);
    }
    auth() {
        let log = {
            "email": "teja",
            "password": "123"
        }
        let { dispatch } = this.props;
        if (log.email === this.email.value && log.password === this.psd.value) {
            dispatch(login())
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {(this.props.isLogin) ?
                    <React.Fragment>
                        <h1>login</h1>
                        <input type='text' placeholder='email' id='email' name='email' ref={(node) => this.email = node} />
                        <input type='password' placeholder='password' id='psd' name='psd' ref={(node) => this.psd = node} />
                        <input type='button' value='submit' onClick={this.auth} />
                    </React.Fragment> : <h1>Iam Logged in</h1>
                }
            </div>
        );
    }
}

export default Login;