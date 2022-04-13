import {combineReducers} from 'redux'

import plantReducer from './plantReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import blogReducers from './blogReducer'

const mainReducer = combineReducers({
    plantReducer,
    userReducer,
    cartReducer,
    blogReducers

})

export default mainReducer