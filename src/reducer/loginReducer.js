
function LoginReducer(initailLogState = {
    isLogin: true
}, action) {
    let newLogState;
    switch (action.type) {
        case "login":
            newLogState = {
                ...initailLogState, isLogin: true
            }
            break;
        case "logout":
            newLogState = {
                ...initailLogState, isLogin: false
            }
            break;
        default:
            newLogState = { ...initailLogState }
            break;
    }
    return newLogState;
}

export default LoginReducer;