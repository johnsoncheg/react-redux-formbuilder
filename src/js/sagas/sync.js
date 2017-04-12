import {
    takeEvery,
    delay,
    takeLatest,
    buffers,
    channel,
    eventChannel,
    END
} from 'redux-saga'

import {
    put,
    call,
    take,
    fork,
    select,
    actionChannel,
    cancel,
    cancelled
} from 'redux-saga/effects'

import {
    FOCUS_COMPONENT,
    ACTIVE_NAV_EDIT,
    ACTIVE_NAV_ADD,
    REMOVE_COMPONENT,
    BLUR_HEADER,
    FOCUS_HEADER,
    BLUR_COMPONNET
} from '../actions/actionsTypes.js'

//监视saga: 每个调用FOCUS_COMPONENT的动作触发ACTIVE_NAV_EDIT

// function *judgeHeaderEdit() {
//     const edit = select(state => state.header.edit)
    
// }

export function *watchFocusComponent() {
    while(yield take(FOCUS_COMPONENT)) {
        yield put({type: ACTIVE_NAV_EDIT})
        const edit = yield select(state => state.form.header.edit)
        if(edit) {
            yield put({type: BLUR_HEADER})
        }
    
    }
}

export function *watchRemoveComponent() {
    while(yield take(REMOVE_COMPONENT)) {
        yield put({type: ACTIVE_NAV_ADD})
    }
}


export function *watchFocusHeader() {
    while(yield take(FOCUS_HEADER)) {
        yield put({type: BLUR_COMPONNET})
    }
}