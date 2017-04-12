import {
    SAVE_NAME,
    SAVE_DESCRIPTION,
    FOCUS_HEADER,
    BLUR_HEADER,
} from './actionsTypes.js'

export const saveName = (name) => ({
    type: SAVE_NAME,
    name
})

export const saveDescription = (description) => ({
    type: SAVE_DESCRIPTION,
    description
})

export const focusHeader = () => ({
    type: FOCUS_HEADER
})

export const blurHeader = () => ({
    type: BLUR_HEADER
})

