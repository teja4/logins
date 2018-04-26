import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './component/App';
import LoginReducer from './reducer/loginReducer';

const AppStore = createStore(LoginReducer);

ReactDOM.render(<Provider store={AppStore}>
    <Router>
        <App />
    </Router></Provider>, document.getElementById('root'));
