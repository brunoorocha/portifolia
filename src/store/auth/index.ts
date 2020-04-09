import { Reducer } from 'redux'
import { AuthTypes, AuthState } from './types'

const INITIAL_STATE: AuthState = {
  token: undefined,
  isLoading: false
}

export const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_START:
      return { ...state, isLoading: true }
    case AuthTypes.SIGN_IN_END:
      return { ...state, isLoading: false }
    case AuthTypes.SET_TOKEN:
      return { ...state, token: action.payload.token }
    case AuthTypes.SET_AUTHENTICATED_USER:
      return { ...state, authenticatedUser: action.payload.user }
    default:
      return state
  }
}
