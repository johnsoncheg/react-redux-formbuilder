import {
    ADD_TEXT,
    REMOVE_COMPONENT,
    FOCUS_COMPONENT,
    BLUR_COMPONNET,
    ADD_TEXTAREA,
    ADD_NUMBER,
    ADD_CHECKBOX,
    ADD_RADIO,
    ADD_DROPDOWN,
    SET_NAME,
    INSERT_RADIO,
    REMOVE_RADIO,
    FETCH_FIELD,
    RECEIVE_FIELD,
    RECEIVE_FIELD_ERROR,
    DELETE_FIELD
} from './actionsTypes.js'

//text
export const addText = () => ({
    type: ADD_TEXT
})

export const addTextArea = () => ({
    type: ADD_TEXTAREA
})

export const addNumber = () => ({
    type: ADD_NUMBER
})

export const addRadio = () => ({
    type: ADD_RADIO
})

export const addCheckbox = () => ({
    type: ADD_CHECKBOX
})

export const addDropdown = () => ({
    type: ADD_DROPDOWN
})

export const removeComponent = (id) => ({
    type: REMOVE_COMPONENT,
    id
})

export const focusComponent = (id) => ({
    type: FOCUS_COMPONENT,
    id
})

export const blurComponent = () => ({
    type: BLUR_COMPONNET
})

export const setName = (index, name) => ({
    type: SET_NAME,
    index,
    name
})

export const insertRadio = (index) => ({
    type: INSERT_RADIO,
    index
})

export const removeRadio = (index) => ({
    type: REMOVE_RADIO,
    index
})

//请求指定symbol的表单
export const fetchField = () => ({
    type: FETCH_FIELD
})

export const receiveField = (fields) => ({
    type: RECEIVE_FIELD,
    fields
})

export const receiveFieldError = () => ({
    type: RECEIVE_FIELD_ERROR
})

export const deleteField = () => ({
    type: DELETE_FIELD
})