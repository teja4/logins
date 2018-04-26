
function LoginReducer(initailLogState = {
    isLogin: false
}, action) {
    let newLogState;
    switch (action.type) {
        case "login":
            newLogState = {
                ...initailLogState, isLogin: true
            }
            break;
        default:
            newLogState = { ...initailLogState }
            break;
    }
    return newLogState;
}

export default LoginReducer;