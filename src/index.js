import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './component//App';
import LoginReducer from './reducer/loginReducer';

const Appstore = createStore(LoginReducer)

reactDOM.render(<Provider store={Appstore}><App /></Provider>, document.getElementById('root'));