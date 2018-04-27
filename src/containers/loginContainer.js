import { connect } from 'react-redux';

import Login from '../component/login';
import { login, valueAdded } from '../actions/loginAction';

function mapToStateProps(state, ownprops) {
    return {
        isLogin: state.isLogin,
    }
}
const LoginContainer = connect(mapToStateProps)(Login);

export default LoginContainer;
