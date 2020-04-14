import { combineReducers } from 'redux'
import { reducer as auth } from './auth'
import { reducer as user } from './user'
import { reducer as project } from './project'
import { reducer as messageCenter } from './message-center'

export default combineReducers({
  auth,
  user,
  project,
  messageCenter
})
