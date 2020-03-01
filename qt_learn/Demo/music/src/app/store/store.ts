import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';
import { defaultState } from './stateTypes';

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)

export default store;

// let createStoreWithMiddleware:any;
// createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware
// )(createStore);

// export default createStoreWithMiddleware(reducer, defaultState);
