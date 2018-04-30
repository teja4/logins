import React, { Component } from 'react';
import axios from 'axios';

import { login } from '../actions/loginAction';
import Header from './header';
import PopUpContainer from '../containers/popUpContainer';

class Login extends Component {
    constructor() {
        super();
        this.auth = this.auth.bind(this);
    }
    auth() {
         
        let enteredemail = this.email.value;
        let enterPsd = this.psd.value;
        
        axios.post('https://reqres.in/api/login', {
            "email": enteredemail,
            "password": enterPsd
          })
          .then(function (response) {
            console.log(response);
            if(response.status === 200){
                alert('success');
            }
          })
          .catch(function (error) {
            alert('error')
          });
      
    }
    render() {
        console.log(this.props.isLogin.isLogin)
        return (
            <React.Fragment>
                <section>
                    <Header log={this.props} />
                    <div className='container'>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-md-4'>

                                <React.Fragment>
                                    <h1>login</h1>
                                    <div className='form-group'>
                                        <input type='text' placeholder='email' id='email' name='email' className='form-control' ref={(node) => this.email = node} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='password' placeholder='password' id='psd' name='psd' className='form-control' ref={(node) => this.psd = node} />
                                    </div>
                                    <div className='form-group'>
                                        <button type='button' value='submit' onClick={this.auth} className='btn btn-secondary'>
                                            Login
                                        </button>
                                        <PopUpContainer />
                                    </div>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default Login;