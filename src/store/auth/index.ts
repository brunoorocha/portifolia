import { Reducer } from 'redux'
import { AuthActionTypes, AuthState } from './types'

const INITIAL_STATE: AuthState = {
  token: undefined,
  isLoading: false
}

export const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_START:
      return { ...state, isLoading: true }
    case AuthActionTypes.SIGN_IN_END:
      return { ...state, isLoading: false }
    case AuthActionTypes.SIGN_OUT:
      return { ...state, token: undefined, authenticatedUser: undefined }
    case AuthActionTypes.SET_TOKEN:
      return { ...state, token: action.payload.token }
    case AuthActionTypes.SET_AUTHENTICATED_USER:
      return { ...state, authenticatedUser: action.payload.user }
    default:
      return state
  }
}
