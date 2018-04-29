import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './assets/img/logo.png';

import './assets/css/header.css';


class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className='navbar navbar-inverse'>
					<div className='navbar-header'>
						<NavLink className='navbar-brand' to='/' >
							<img src={Logo} alt='logo' className='img-responsive' />
						</NavLink>
					</div>
					<ul className='navbar-nav nav'>
						{(!this.props.log.isLogin.isLogin) ?
							<React.Fragment>
								<li>
									<NavLink to='/'>Home</NavLink>
								</li>
								<li>
									<NavLink to='/signup'>signup</NavLink>
								</li>
							</React.Fragment> : <React.Fragment>
								<li>
									<NavLink to='/home'>Home</NavLink>
								</li>
								<li>
									<a onClick={this.logOut}>log out</a>
								</li>
							</React.Fragment>
						}

					</ul>
				</nav>
			</React.Fragment>
		);
	}
}

export default Header;