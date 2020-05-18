import { Reducer } from 'redux'
import { AuthActionTypes, AuthState } from './types'

const INITIAL_STATE: AuthState = {
  token: undefined,
  isLoading: false,
  isLoadingFacebookAuth: false,
  isLoadingGoogleAuth: false
}

export const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_START:
      return { ...state, isLoading: true }
    case AuthActionTypes.SIGN_IN_END:
      return { ...state, isLoading: false }
    case AuthActionTypes.SIGN_OUT:
      return { ...state, token: undefined }
    case AuthActionTypes.SET_TOKEN:
      return { ...state, token: action.payload.token }
    case AuthActionTypes.FACEBOOK_SIGN_IN_START:
      return { ...state, isLoadingFacebookAuth: true }
    case AuthActionTypes.FACEBOOK_SIGN_IN_END:
      return { ...state, isLoadingFacebookAuth: false }
    case AuthActionTypes.GOOGLE_SIGN_IN_START:
      return { ...state, isLoadingGoogleAuth: true }
    case AuthActionTypes.GOOGLE_SIGN_IN_END:
      return { ...state, isLoadingGoogleAuth: false }
    default:
      return state
  }
}
