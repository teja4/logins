import { connect } from 'react-redux';

import Login from '../component/login';
import { login, logout } from '../actions/loginAction'

function mapStateToprops(state) {
    return {
        isLogin: state.isLogin
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loginHandler: () => {
            dispatch(login())
        },
        logoutHandler: () => {
            dispatch(logout());
        }
    }
}
let LoginContainer = connect(mapStateToprops, mapDispatchToProps)(Login);

export default LoginContainer;