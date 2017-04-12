import {
    DO_REQUEST,
    SAVE_FORM_SUCCESS,
    SAVE_FORM_ERROR,
    FETCH_LIST,
    FETCH_SUCCESS,
    FETCH_ERROR
} from './actionsTypes'

//提交表单
export const doRequest = () => ({
    type: DO_REQUEST
})

export const saveFormSuccess = () => ({
    type: SAVE_FORM_SUCCESS
})

export const saveFormError = () => ({
    type: SAVE_FORM_ERROR
})


//请求表单列表
export const doFetch = () => ({
    type: FETCH_LIST
})

export const fetchSuccess = (items) => ({
    type: FETCH_SUCCESS,
    items
})

export const fetchError = () => ({
    type: FETCH_ERROR
})

