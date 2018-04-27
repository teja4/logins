import React, { Component } from 'react';

import { login,logout } from '../actions/loginAction';

class Login extends Component {
    constructor() {
        super();
        this.auth = this.auth.bind(this);
    }
    componentDidMount(){
        let {dispatch} = this.props;
        dispatch(logout());
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
        return (
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-4'>
                        {(!this.props.isLogin) ?
                                <React.Fragment>
                                    <h1>login</h1>
                                    <div className='form-group'>
                                        <input type='text' placeholder='email' id='email' name='email' className='form-control' ref={(node) => this.email = node} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='password' placeholder='password' id='psd' name='psd' className='form-control' ref={(node) => this.psd = node} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='button' value='submit' onClick={this.auth} />
                                    </div>
                            </React.Fragment> : <h1>Iam Logged in</h1>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;