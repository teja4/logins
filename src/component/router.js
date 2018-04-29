import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginContainer from '../containers/loginContainer';
import Home from '../component/home'
import InnerPage from '../component/InnerPage';

class Routers extends Component {
    render() {
        console.log(this.props.isLogin.isLogin)
        return (
            <div>
                {(!this.props.isLogin.isLogin) ?
                    <Switch>
                        <Route path='/' exact component={LoginContainer} />
                        <Route path='*' component={LoginContainer} />
                    </Switch> :
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/inner' exact component={InnerPage} />
                    </Switch>}
            </div>
        );
    }
}
export default Routers;