import { action } from 'typesafe-actions'
import { AuthActionTypes } from './types'

export const signIn = (username: string, password: string) => action(AuthActionTypes.SIGN_IN_START, { username, password })

export const signInEnd = () => action(AuthActionTypes.SIGN_IN_END)

export const facebookSignIn = (facebookToken: string) => action(AuthActionTypes.FACEBOOK_SIGN_IN_START, { facebookToken })

export const facebookSignInEnd = () => action(AuthActionTypes.FACEBOOK_SIGN_IN_END)

export const setToken = (token: string) => action(AuthActionTypes.SET_TOKEN, { token })

export const signOut = () => action(AuthActionTypes.SIGN_OUT)

