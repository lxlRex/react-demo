import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './reducers'

const initialState = {}
const middleware = [thunk]

// reducer state middleware
let store = createStore(Reducer, initialState, compose(applyMiddleware(...middleware)))
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(Reducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
}

export { store }
