import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Logo from './assets/img/logo.png';
import LoginContainer from '../container/loginContainer';
import Signup from './signup'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                <div className='navbar-header'>
                                    <NavLink className='nav-brand' to='/'>
                                        <img src={Logo} className='img-responsive' alt='logo' />
                                    </NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                <ul className='menulink'>
                                    <li>
                                        <NavLink to='/' activeClassName='active'>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/signup' activeClassName='active'>Sign Up</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/home' activeClassName='active'>Home</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </header>
                <Switch>
                    <Route path='/' exact component={LoginContainer} />
                    <Route path='/signup' component={Signup} />
                    <Route path='*' component={LoginContainer} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Header;