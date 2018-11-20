import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducers from './reducers'

const reducer = combineReducers(reducers)
const sagaMiddleware = createSagaMiddleware()

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(
	applyMiddleware(sagaMiddleware),
	devTools
)

const store = createStore(reducer, enhancer)
sagaMiddleware.run(rootSaga)


export default store