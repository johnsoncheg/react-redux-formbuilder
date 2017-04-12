import {
    SET_LABEL,
    SET_VALUE,
    SET_REQUIRED
} from './actionsTypes.js'


//设置标题
export const setLabel = (label) => ({
    type: SET_LABEL,
    label
})

//设置是否必要字段
export const setRequired = (selected) => ({
    type: SET_REQUIRED,
    selected
})

//设置默认值
export const setValue = (value) => ({
    type: SET_VALUE,
    value
})