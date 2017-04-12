import React from 'react'
import {Route, IndexRoute} from 'react-router'

import {
    NewForm,
    App,
    FormList,
    EditForm,
    BlankPage
} from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={NewForm}/>
        <Route path='/formlist' component={FormList}/>
        <Route path='/forms' component={EditForm}/>
        <Route path='*' component={BlankPage} />
    </Route>
);