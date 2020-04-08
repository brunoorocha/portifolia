import { createStore, Store } from 'redux'
import { AppState } from './app/types'
import rootReducer from './rootReducer'

const store: Store<AppState> = createStore(rootReducer)

export default store
