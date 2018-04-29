import { connect } from 'react-redux';

import ForgetPassword from '../component/forgetPassword';

function mapStateToProps(state) {
    return {
        popup: state.PopupReducer
    }
}
const PopUpContainer = connect(mapStateToProps)(ForgetPassword);

export default PopUpContainer;