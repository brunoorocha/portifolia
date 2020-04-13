import { Reducer } from 'redux'
import { UserState, UserActionTypes } from './types'

const INITIAL_STATE: UserState = {
  isCreateUserLoading: false
}

export const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.CREATE_USER_START:
      return { ...state, isCreateUserLoading: true }
    case UserActionTypes.CREATE_USER_END:
      return { ...state, isCreateUserLoading: false }
    default:
      return state
  }
}
