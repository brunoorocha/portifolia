import { combineReducers } from 'redux'
import { reducer as auth } from './auth'
import { reducer as messageCenter } from './message-center'

export default combineReducers({
  auth,
  messageCenter
})
