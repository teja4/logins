import React, { Component } from 'react';

import HeaderContainer from '../containers/loginContainer';

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <section>
                <HeaderContainer />
            </section>
        );
    }
}

export default App;