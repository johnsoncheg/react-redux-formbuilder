import {
    ACTIVE_NAV_ADD,
    ACTIVE_NAV_EDIT
} from '../actions/actionsTypes.js'


const init = {
    nav_add: true,
    nav_edit: false
}

export default function nav(state=init, action) {
    switch(action.type) {
        case ACTIVE_NAV_ADD:
            return {
                nav_add: true,
                nav_edit: false
            }
        case ACTIVE_NAV_EDIT:
            return {
                nav_add: false,
                nav_edit: true
            }
        default:
            return state
    }
}