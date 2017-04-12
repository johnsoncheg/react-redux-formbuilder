import {combineReducers} from 'redux'

import nav from './nav'
import post from './post'
import form from './form'




const rootReducers = combineReducers({
    form,
    nav,
    post
});



export default rootReducers