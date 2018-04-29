import { connect } from 'react-redux';

import Routers from '../component/router';

function mapToStateProps(state) {
    return {
        isLogin: state.LoginReducer
    }
}
const RouterContainer = connect(mapToStateProps)(Routers);

export default RouterContainer;