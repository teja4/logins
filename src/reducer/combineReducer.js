import { combineReducers } from 'redux';

import LoginReducer from './loginReducer';
import PopupReducer from './popupReducer';


const CombineReducer = combineReducers({
    LoginReducer,
    PopupReducer
});

export default CombineReducer;