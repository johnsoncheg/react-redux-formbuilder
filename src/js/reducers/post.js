import {
    DO_REQUEST,
    SAVE_FORM_SUCCESS,
    SAVE_FORM_ERROR,
    FETCH_LIST,
    FETCH_SUCCESS,
    FETCH_ERROR
} from '../actions/actionsTypes.js'

const init = {
    isPosted: false,
    isFetching: false,
    items: []
}

export default function post(state=init, action) {
    switch(action.type) {
         case DO_REQUEST:
            return {
                ...state,
                isPosted: true
            }
        case SAVE_FORM_SUCCESS:
            return {
                ...state,
                isPosted: false
            }
        case SAVE_FORM_ERROR:
           return {
               ...state,
               isPosted: false
           }
        case FETCH_LIST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                items: action.items,
                isFetching: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state 
    }
}