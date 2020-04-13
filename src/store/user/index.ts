import { Reducer } from 'redux'
import { UserState, UserActionTypes } from './types'

const INITIAL_STATE: UserState = {
  isLoading: false
}

export const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.CREATE_USER_START:
      return { ...state, isLoading: true }
    case UserActionTypes.CREATE_USER_END:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
