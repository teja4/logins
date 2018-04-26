import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Login extends Component {
    render() {
        console.log(this.props.isLogin);
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-12 text-center'>
                        <h1>Login</h1>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>user name</label>
                            <input type='text' className='form-control' placeholder='email' />
                        </div>
                        <div className='form-group'>
                            <label>password</label>
                            <input type='password' className='form-control' placeholder='password' />
                        </div>
                        <div className='form-group'>
                            <Button type='button' color='primary' onClick={this.props.loginHandler}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;