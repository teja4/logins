function LoginReducer(prevState = { isLogin: false }, action) {
    let newState;
    switch (action.type) {
        case "login":
            newState = { ...prevState, isLogin: true }
            break;
        case "logout":
            newState = { ...prevState, isLogin: false }
            break
        default:
            newState = { ...prevState, isLogin: false }
            break;
    }
    return newState;
}

export default LoginReducer;