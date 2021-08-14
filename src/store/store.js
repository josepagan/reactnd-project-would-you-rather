import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import middlewareApi from './middlewareApi'

import reducer from './reducer'

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25});


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware, middlewareApi)))

export default store;