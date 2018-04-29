import { connect } from 'react-redux';

import Login from '../component/login';

function mapToStateProps(state, ownprops) {
    return {
        isLogin: state.LoginReducer,
    }
}
const LoginContainer = connect(mapToStateProps)(Login);

export default LoginContainer;
