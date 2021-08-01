import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import middlewareApi from './middlewareApi'

import reducer from './reducer'
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, middlewareApi)))

export default store;