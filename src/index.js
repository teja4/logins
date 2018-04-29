import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './component//App';
import CombineReducer from './reducer/combineReducer';

const Appstore = createStore(CombineReducer)

reactDOM.render(<Provider store={Appstore}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));