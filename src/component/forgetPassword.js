import React, { Component } from 'react';

import { popup, popout } from '../actions/popupAction';

class ForgetPassword extends Component {
    popin = () => {
        let { dispatch } = this.props;
        dispatch(popup());
    }
    popout = () => {
        let { dispatch } = this.props;
        dispatch(popout())
    }
    render() {

        return (
            <React.Fragment>
                <a onClick={this.popin}>Forget Password</a>
                {(this.props.popup.popup) ? <div className='popupmodal' onClick={this.popout}>

                    <h1>iam modal</h1>
                </div> : null}

            </React.Fragment>
        );
    }
}

export default ForgetPassword;