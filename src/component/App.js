import React, { Component } from 'react';

import LoginContainer from '../containers/loginContainer';

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <LoginContainer />
            </div>
        );
    }
}

export default App;