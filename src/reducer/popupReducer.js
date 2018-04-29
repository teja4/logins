export default function PopupReducer(popup = { popup: false }, action) {
    let popstate;
    switch (action.type) {
        case "popup":
            popstate = { ...popup, popup: true }
            break;
        case "popout":
            popstate = { ...popup, popup: false }
            break;
        default:
            popstate = { ...popup }
            break;
    }
    return popstate;
}