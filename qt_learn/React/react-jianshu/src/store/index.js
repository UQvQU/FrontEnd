import { combineReducers } from 'redux-immutable'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from '../pages/home/store/reducer'

const reducer = combineReducers({
  home: homeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store