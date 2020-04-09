import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { AppState } from './app/types'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const store: Store<AppState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store
