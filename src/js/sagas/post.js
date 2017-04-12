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

import fetch from 'isomorphic-fetch';
import { message } from 'antd'

import {
    DO_REQUEST,
    SAVE_FORM_SUCCESS,
    SAVE_FORM_ERROR,
    FETCH_LIST,
    FETCH_SUCCESS,
    FETCH_ERROR,
    FETCH_FIELD,
    RECEIVE_FIELD,
    RECEIVE_FIELD_ERROR
} from '../actions/actionsTypes.js'

// production
// const URL = window.location.protocol + '//' + window.location.host;

//development
const URL = "http://127.0.0.1:3003";

function fetchPostsApi(method, url, form) {

    return fetch(url, {
        method: method,
        body: JSON.stringify(form),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

function *fetchPosts() {
    try {
        const form = yield select(getForm)
        console.log('--form--',form, '-----');
        const result= yield call(fetchPostsApi, 'POST', URL+ '/forms', form)
        yield call(message.success, '提交成功')
        yield put({type: SAVE_FORM_SUCCESS})
        // return {
        //     err: null, res: result.res
        // }
    } catch(error) {
        console.log(error)
        yield call(message.error, '提交失败')
        yield put({type: SAVE_FORM_ERROR})
        // return {
        //     err: error, res: null
        // }
    }
}

//表单json
const getForm = state => ({
    symbol: state.form.symbol || Math.random().toString(36).substr(2, 6),
    name: state.form.header.name,
    description: state.form.header.description,
    fields: state.form.fields
})

export function *watchPostForm() {
    yield *takeLatest(DO_REQUEST, fetchPosts)
}

function *fetchList() {
    try {
        const result = yield call(fetchPostsApi, 'GET', URL + '/forms')
        yield call(delay, 2500)
        yield put({type: FETCH_SUCCESS, items: result})
    } catch(err) {
        console.log(err);
        yield put({type: FETCH_ERROR})    
    }
    
}

function *fetchField() {
    try {
        const result = yield call(fetchPostsApi, 'GET', URL + '/forms?symbol=' + location.search.substring(8))
        yield put ({type: RECEIVE_FIELD, fields: result})
    } catch(err) {
        console.log(err);
        yield put({type: RECEIVE_FIELD_ERROR})
    }
}

export function *watchFetchList() {
    while(yield take(FETCH_LIST)) {
        yield fork(fetchList)
    }
}

//发起获取表单详情请求
export function *watchFetchFields() {
    while(yield take(FETCH_FIELD)) {
        yield fork(fetchField)
    }
}