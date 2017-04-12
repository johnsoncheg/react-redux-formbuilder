import {
    SAVE_NAME, 
    SAVE_DESCRIPTION, 
    FOCUS_HEADER, 
    BLUR_HEADER
} from '../actions/actionsTypes.js'

const init = {
    name: "未命名表单名称",
    description: '未添加表单描述',
    edit: false
}

export default function header(state=init, action) {
    switch(action.type) {
        case FOCUS_HEADER:
            return {
                ...state,
                edit: true
            }
        case BLUR_HEADER:
            return {
                ...state,
                edit: false
            }
        case SAVE_NAME:
            return {
                ...state,
                name: action.name
            }

        case SAVE_DESCRIPTION:
            return {
                ...state,
                description: action.description
            }
        default:
            return state
    }
}