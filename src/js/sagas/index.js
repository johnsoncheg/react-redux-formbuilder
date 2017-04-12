//saga模块的引入
import { fork } from 'redux-saga/effects'

//同步逻辑
import { watchFocusComponent, watchRemoveComponent, watchFocusHeader } from './sync'

//异步逻辑
import { watchPostForm, watchFetchList, watchFetchFields } from './post'

export default function *rootSaga() {
    yield [
        fork(watchFocusComponent),
        fork(watchRemoveComponent),
        fork(watchFocusHeader),
        fork(watchPostForm),
        fork(watchFetchList),
        fork(watchFetchFields)
    ]
}